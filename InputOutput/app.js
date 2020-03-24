

    const fromUtils = require('./utils.js')
    console.log(fromUtils)
     const yargs = require('yargs')
    // console.log('data printed from utils file -----------------')
    //  console.log(process.argv[2]
    
// const command =  process.argv[2]
// if (command==='add'){
//     console.log('data added ')
// }
// else if(command === 'add2'){
//     console.log('data added newly')
// }
//  else{
//      console.log('data removed')
//  }
//  console.log('normal arument  ==== '+ process.argv)
// console.log('yargs argument is ==== '+ yargs.argv)
// console.log(yargs.argv)
 yargs.command({
     command:'add',
     describe: 'data added now',
     handler:function(){
   console.log('data printed from function')
     }
 })
  
 yargs.command({
     command:'remove',
     describe:'data removed now',
     handler:function(){
         console.log('data removed from fucntion now')
     }
 })
  yargs.command({
      command:'list',
      describe:'data for list records ',
      handler:function(){
          console.log('data from lis records---')
      }
  })
   yargs.command({
       command:'read',
       describe:'data from read command ',
       handler:function()[
           console.log('data from read command')
       ]
   })
 console.log(yargs.argv)
    
