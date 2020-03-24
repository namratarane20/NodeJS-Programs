// import validator from 'validator'
const validator =require('validator')
const chalk = require('chalk')
//========================= this is for validator lib==================
console.log('================= this is for validator  lib============================')
const utilsFile = require('./utils.js')
console.log(utilsFile())
console.log(validator.isEmail('namratra@gmail.com'))
name = 'Namrata Ashok Rane'
console.log(validator.contains(name,'Nam'))
console.log(validator.equals(name,'Namrata ashok Rane'))
console.log(validator.isURL('https://www.youtube.com/watch?v=0trdq9hUKNqknM3c&index=12'))
console.log('================= this is for chalk  lib============================')
// ================= this is for chalk  lib============================

console.log(chalk.bold.green('Namrata Ashok Rane'))
console.log(chalk.yellow('Namrata Ashok Rane'))
console.log(chalk.blue.bgWhite('Namrata Ashok Rane'))
console.log(chalk.bold.redBright('Namrata Ashok Rane'))
console.log(chalk.underline('Namrata Ashok Rane'))


