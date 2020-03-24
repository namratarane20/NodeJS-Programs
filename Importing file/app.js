    const fromUtils = require('./utils.js')
    console.log(fromUtils(10,-5))
    console.log('addition printed from utils.js')
     const  getNoteFile  = require('./getNotes.js')
     const msg = getNoteFile()
    console.log(msg)

    console.log(fromUtils(10,6))    
    
    // const fs  = require('fs')
    //  const name = 'Namrata rane '
    //  console.log(name)
    //  module.exports(name)
    //  console.log('welcome again==========')
    // fs.writeFileSync('text.txt','file is created by node js ===============')
    // console.log('file created successfully=================================')
    // fs.appendFileSync('text.txt','newly added records here')
    // console.log('dada appende succesfully==================================')