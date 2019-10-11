const yargs = require('yargs')
const notes = require('./notes')

// add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// list all
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        notes.listAllNotes()
    }
})

// read one
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

// update title
yargs.command({
    command: 'update_title',
    describe: 'update note title',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        newtitle: {
            describe: 'new title of note',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.updateNoteTitle(argv.title, argv.newtitle)
    }
})

// update body
yargs.command({
    command: 'update_body',
    describe: 'update note body',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.updateNoteBody(argv.title, argv.body)
    }
})

// remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.parse()

