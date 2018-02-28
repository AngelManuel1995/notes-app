// console.log("Starting app.js")

// const fs = require('fs')
// const _ = require('lodash')
// const yargs = require('yargs')

// const notes = require('./notes.js')

// let argv = yargs.argv
// let command = process.argv[2]
// console.log("Command ", command)
// console.log("Yargs ", argv)

// if ( command === "add" ){
// 	console.log("Adding new note")
// }else if ( command === "list" ){
// 	console.log("listing all notess")
// }else if ( command === "read" ){
// 	console.log("Reading a note")
// }else if ( command === "remove"){
// 	console.log("Removing a note")
// }else{
// 	console.log("Commmand not reconized")
//}

// switch(command){
// 	case "add": 
// 		let note = notes.addNote( argv.title, argv.body )
// 		if(note){
// 			console.log('Note created')
// 			console.log('_____')
// 			console.log(`Title: ${ note.title }`)
// 			console.log(`Body: ${ note.body }`)
// 		} else {
// 			console.log("Note title taken")
// 		}
// 		break
// 	case "list": 
// 		notes.getAll()
// 		break
// 	case "read":
// 		notes.getNote( argv.title )
// 		break
// 	case "remove":
// 		notes.removeNote( argv.title )
// 		break
// 	default :
// 		console.log("Command not reconized")
// }

const yargs = require('yargs')
const notes = require('./notes')

const bodyOptions	= {
	describe:'Body of note',
	demand:true,
	alias:'b'
}	
const titleOptions = {
	describe:'Title of note',
	demand:true,
	alias:'t'
}

const argv = yargs
	.command('add','Add a new note',{
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read','Read a note', {
		title:titleOptions
	})
	.command('remove','Remove a note', {
		title:titleOptions
	})
	.help()
	.argv



const option = yargs.argv._[0]


switch(option){
	case 'add': 
		note = notes.addNote(argv.title, argv.body)
		if(note){
			console.log("Note created")
			notes.logNote(note)
		}else{
			console.log("Note title taken")
		}
		break
	case 'list':  
		let allNotes = notes.getAll()
		console.log(`Printing ${allNotes.length} note(s)`)
		allNotes.forEach((note) => { notes.logNote(note) }) 
		break
	case 'read': 
		let note = notes.getNote(argv.title)
		if(note){
			console.log('Note found')
			notes.logNote(note)
		}else{
			console.log('Note not found')
		}
		break 
	case 'remove': 
		let noteRemove = notes.removeNote(argv.title)
		let message = noteRemove ? 'Note was removed':'Note was not removed'
		console.log(message)
		break
	default: 
		console.log("Not valid option")
}



/**
 * Documentación:
 * En este ejercicio lo que vamos a ver es como capturar datos por consola para lo que
 * existen varias fornas:
 * 1. lo podemos hacer lo la instruccón process.argv[2]: que es lo que nos trae la información
 * 	  que le pasamos por consola como argumento.
 * 2. La otra forma de hacer lo en con el componente yargs, ya que es una forma menos 
 * 	  complicada de hacer ya que la información que le pasemos por consola, sera pasada
 * 	  como un objeto el cual será más fácil de capturar la informacion.
 *
 * La forma en la que vamos a parar los paraetros por consola será la siguiente:
 * Lo primero que vamos a hacee es ejecutar el archivo app.js con el comando node,
 * lo segundo que podemos hacer es enviar un parámetro y despues de eso los parámetros que
 * queramos enviar serán presedidos por dos guiones medios y despues de nombre de los 
 * parámetros lo ponemos singo de igual para indicar que inicia el contenido del parametro.
 * Ejemplo: node app.js add --title="Groseries to buy" --body="This is the groseries lits to buy"
 * 
 * 
 */























//const os = require('os')
// var user = os.userInfo()
// var res = notes.addNotes()
// var res1 = notes.add(2,4)
// console.log(res1)

// console.log(_.isString(true))
// console.log(_.isString("Angel Manuel"))

// var filteredArray = _.uniq(["Angel", "Angel", "Manuel" , 1,2,2,3,1,4,5])
// console.log(filteredArray)

//First option we can use appendFile but it's a old way to make it.
//fs.appendFile('greeting.txt', 'Hello world!')
//Whit the second option we have to use a callback, that we are going to learn after.

/*fs.appendFile('greeting.txt', 'Hello wolrd!', (err) => {
	if(err){
		console.log("Unable to write the file")
	}
})*/

//Option three
//fs.appendFileSync('greeting.txt', ` Hello ${user.username} You are ${notes.age}! with appendFileSync function`)

