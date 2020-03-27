// Logic to read data from csv file into array

// const parse = require('csv-parse')
//  const fs= require('fs')
//  const myArray =[];
//  fs.createReadStream('Livongo.csv')
//  .pipe(
//      parse({
//          delimiter:','
//      })
//  ).on('data',function(dataRow){
//      myArray.push(dataRow);
//  }).on('end',function(){
//      console.log(myArray)
     
//  })

// const csvToJson = require('csvtojson')
// *************** Logic to read data from csv file and convert it into json data.****************
const csv=require('csvtojson')
csv().fromFile('Emp.csv').then((jsonObj)=>{
    console.log(jsonObj)
})
csv()
.fromFile('Emp.csv')
.then((jsonObj)=>{
    console.log(jsonObj)
    console.log(typeof(jsonObj))
    // console.log(jsonObj.Name)
    
for( i in jsonObj){
    
    console.log(jsonObj[i].Name +" -- "+ jsonObj[i].Des+" -- "+ jsonObj[i].Sal+" --  "+ jsonObj[i].Add)
    setTimeout(function(){
        console.log('data --')
    },2000)
    
}

   
})