// const os = require('os')
// const validator = require('validator')
// const add = require('./utils.js')


// // console.log(add(1,2))

// // console.log(getNotes())

// console.log(validator.isURL('https://meado.io'))


const chalk = require('chalk')
const os= require('os')
const yargs = require('yargs')
const notes = require('./notes')


// console.log(chalk.bold.red('ERROR'))
// const name = 'World'
// console.log(chalk.blue('Hello %s'),name)

yargs.command({
    command:'add',
    describe: 'Addding a note command',
    builder:{
        title:{
            describe: 'Note addition',
            demandOption: true,
            type: 'string'
        },
        body:{
            description: 'Body of Add',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing a node command',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note command',
    builder: {
        title:{
            describe: 'Note Remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

//console.log(process.argv) //returns array
//console.log(yargs.argv) //returns an object
yargs.parse() //does not print console twice