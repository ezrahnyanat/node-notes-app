const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title.toLowerCase() === title.toLowerCase())
    if (!duplicateNote) {
        const noteAdded = notes.concat({
            title: title,
            body: body
        })
        saveNotes(noteAdded)
        console.log(chalk.black.bgGreen('note added'))
    } else {
        console.log(chalk.black.bgRed('note title taken'))
    }
}

const listAllNotes = () => {
    const notes = loadNotes()
    console.log(chalk.black.bgBlue('your notes...'))
    notes.map(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(chalk.black.bgBlue(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.black.bgRed('note not found'))
    }
}

const updateNoteTitle = (title, newTitle) => {
    const notes = loadNotes()
    const isNote = notes.find(note => note.title === title)
    if (isNote) {
        notes[notes.indexOf(isNote)].title = newTitle
    } else {
        console.log(chalk.black.bgRed('note not found'))
        return
    }
    saveNotes(notes)
    console.log(chalk.black.bgGreen('note title updated'))
}

const updateNoteBody = (title, body) => {
    const notes = loadNotes()
    const isNote = notes.find(note => note.title === title)
    if (isNote) {
        notes[notes.indexOf(isNote)].body = body
    } else {
        console.log(chalk.black.bgRed('note not found'))
        return
    }
    saveNotes(notes)
    console.log(chalk.black.bgGreen('note body updated'))
}

const removeNote = (title) => {
    const notes = loadNotes()
    const isNote = notes.find(note => note.title.toLowerCase() === title.toLowerCase())
    if (isNote) {
        const notesToKeep = notes.filter(note => note.title !== title)
        saveNotes(notesToKeep)
        console.log(chalk.black.bgGreen('note removed'))
    } else {
        console.log(chalk.black.bgRed('note with that title does not exist'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (error) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    listAllNotes: listAllNotes,
    readNote: readNote,
    updateNoteTitle: updateNoteTitle,
    updateNoteBody: updateNoteBody,
    removeNote: removeNote
}
