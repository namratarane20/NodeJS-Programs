const fs = require('fs')


const book = {
    title: ' the secrete',
    Auther: 'namrata',
    Date: '20 th dec 2019'
}
const bookJSON = JSON.stringify(book)
console.log('object data--- ' + book)
//  console.log('tywp is====' + typeof(book)) // object type
console.log('json data --- ' + bookJSON)
//  console.log('type of after stringfy----'+ typeof(bookJSON))this is string type
console.log(book.title + "  " + book.Auther + "  " + book.Date)
const data = JSON.parse(bookJSON)
console.log('data ----' + data.title + data.Auther)
    // fs.writeFileSync('myJson.json', bookJSON)
    debugger
const readData =fs.readFileSync('myJson.json')    
// console.log(readData)
const dataJson = readData.toString()
const jsonNewData = JSON.parse(dataJson)
console.log(jsonNewData)
jsonNewData.Auther='nikita'
jsonNewData.title='sham chi aai'
jsonNewData.Date = '20 december 2020'
const newData = JSON.stringify(jsonNewData)
fs.writeFileSync('myJson.json', newData)


for( i in jsonNewData){
    console.log(i+" : "+jsonNewData[i])
}
