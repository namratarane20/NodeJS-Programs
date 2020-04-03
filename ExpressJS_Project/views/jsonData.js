var myobj = [
    {
        name:'Namrata',
        age:24,
        add:'bangalore'
    },
    {
        name:'tushar',
        age:25,
        add:'Pune'
    }
]

for(var i =0;i<myobj.length;i++){
    // console.log('name---',myobj[i].name)
    // console.log('age-----',myobj[i].age)
    var nameProp = myobj[i].name
    console.log(nameProp, typeof(nameProp))
    var ageProp = myobj[i].age
    console.log(ageProp, typeof(ageProp))

}
// myobj.forEach(function(data){
//  console.log(myobj[data].name)
  
// })