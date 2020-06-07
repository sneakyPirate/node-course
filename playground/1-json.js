const fs = require('fs')

// const book = {
//     title:'Ego is ther Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const bookBuffer = fs.readFileSync('1-json.json');
// const bookData = bookBuffer.toString()
// const bookJSON = JSON.parse(bookData)
// const bookAuthor = bookJSON.author
// console.log(bookAuthor)

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const dataJSON = JSON.parse(dataString)
dataJSON.name = 'Pirate'
dataJSON.age = '26'
fs.writeFileSync('1-json.json',JSON.stringify(dataJSON))
// console.log(JSON.stringify(dataJSON))

// console.log( fs.readFileSync('1-json.json').toString())