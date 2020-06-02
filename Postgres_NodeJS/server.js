const express = require('express')
const app = express();
const { pool } = require("./dbConfig");
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');
const passport = require("passport");

const initializePassport = require('./passportConfig');

initializePassport(passport);


const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());

app.use(passport.session());

app.use(flash())




app.get("/", (req, res) => {
    res.render("index");

});
app.get("/users/register",checkAuthenticated, (req, res) => {
    res.render("register");

});
app.get("/users/login",checkAuthenticated, (req, res) => {
    res.render("login");

});
app.get("/users/dashboard", checkNotAuthenticated,(req, res) => {
    res.render("dashboard", { user: req.user.name })
})

app.get("/users/logout", (req, res) => {
    req.logOut();
    req.flash("success_msg", "Yor are logged out !!!");
    res.redirect("/users/login");
})

app.post("/users/register", async (req, res) => {

    let { name, email, password, password2 } = req.body;

    console.log({
        name,
        email,
        password,
        password2
    });
    let errors = [];
    if (!name || !email || !password || !password2) {
        errors.push({ message: "Please Enter all fileds" });

    }
    if (password2.length < 5) {
        errors.push({ message: "Password should be at least 5 characters" })
    }

    if (password != password2) {
        errors.push({ message: "Your passwords do not match" })
    }
    if (errors.length > 0) {
        res.render('register', { errors });

    }
    else {
        //Form valodation has passed
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)



        // pool.query("SELECT * from some_table", (err, res) => {
        //     console.log(err, res);
        //     pool.end();
        //   }

        pool.query(
            "SELECT * FROM users", (err, results) => {
                if (err) {
                    throw err;
                }
                // console.log('total resuslt -----------',results, typeof(results))
                // console.log('one by one row-------',results.rows, typeof(results.rows))

                //   console.log(results.rows);
                for (i in results.rows) {
                    console.log(results.rows[i].email)
                    console.log(email)
                    if (results.rows[i].email === email) {
                        // console.log('alreadyexist');
                        // break;
                        errors.push({ message: "email already registed " });
                        res.render("register", { errors })

                    }
                    else {
                        pool.query(
                            `INSERT INTO users (name, email,password)
                            VALUES($1, $2, $3)
                            RETURNING id, password`, [name, email, hashedPassword],
                            (err, results) => {
                                if (err) {
                                    throw err;
                                }
                                console.log(results.rows);
                                const userName = name
                                const userMail = email
                                req.flash("success_msg", `welcome ${userName}, You are now registred  as Email Id ${userMail}. Please Log in now`)
                                res.redirect("/users/login")

                            }
                        )
                    }

                }
            }

        );
    }
});


app.post(
    "/users/login",
    passport.authenticate("local",
        {
            successRedirect: "/users/dashboard",
            failureRedirect: "/users/login",
            failureFlash: true
        })

);


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/users/dashboard");

    }
    next();
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/users/login");
}



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})