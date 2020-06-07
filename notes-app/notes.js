"use strict"
const fs = require('fs')
const chalk = require('chalk')

const warning = chalk.keyword('orange')
const error = chalk.bold.red.inverse


const readNote = (title) => {
    const note = loadNotes().find(note => note.title === title)
    if(note){
        console.log(chalk.inverse.underline(note.title), " ", note.body)
    }
    else{
        console.log(chalk.red('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(element => {
      console.log(chalk.blue(JSON.stringify(element)))  
    })
    notes.forEach(element => {
        console.log(chalk.inverse(element.title))
    })
}

const duplicateNote = function(notes,title){
    // const dNotes = notes.filter(n => n.title===title)
    const dNote = notes.find(note => note.title === title)
    // return dNotes.length
    return dNote
}

const addNotes = function(title,body){
    const notes = loadNotes();
    //console.log(notes)
    debugger
    if(!duplicateNote(notes,title)){
        const note = {
            title: title,
            body: body
        }
        notes.push(note)
        saveNotes(notes)
    }
    else{
        console.log(error('Note title already present!\n'),warning('Titles already taken: '))
        notes.forEach(element => console.log(element.title));
    } 
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
    
}

const removeNote = function(title){
    const notes = loadNotes()
    const keepNotes = notes.filter(n => n.title !== title)
    if(notes.length !== keepNotes.length){
        saveNotes(keepNotes)
        console.log(chalk.bgGreen(title, 'removed'))
        const nNotes = loadNotes()
        nNotes.forEach(element => {
            console.log(element.title)
        });
    }
    else{
        console.log(chalk.red.inverse('No Node Found!'))
    }
    
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}