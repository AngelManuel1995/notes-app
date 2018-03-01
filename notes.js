// console.log('Starting notes.js');

// const fs = require('fs');

// module.exports.addNotes = () => {
//     console.log('Add Note function');
//     return "It's working";
// }

// //fetchNotes function
// let fetchNotes = () => {
	
// 	try {
// 		let notesString = fs.readFileSync('notes-data.json');
// 		return JSON.parse(notesString);
// 	} catch(e){
// 		return [];
// 	}

// }

// let saveNotes = (notes) => {
// 	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
// }

// const addNote = ( title, body) =>{
// 	 let notes = fetchNotes();
	 
//    let note = {
//        title,
//        body
//    }  
	 
// 	 let duplicateNotes = notes.filter( (note) => note.title === title );

// 	 if( duplicateNotes.length === 0 ){
// 		notes.push(note)
// 		saveNotes(notes);
// 		return(note)
// 	 }
   
// }
// const getAll = () =>{
//     console.log('getting all notes');
// }
// const getNote = ( title ) =>{
//     console.log('Reading note: ', title);
// }
// const removeNote = ( title ) =>{
//     console.log('Removing note: ', title);
// }
// const showJson = (title, body) => {
//     let obj = {
//         title,
//         body
//     }
//     console.log(obj);
// }


// module.exports = {
//     addNote,
//     getAll,
//     getNote,
//     removeNote,
// }



const fs = require('fs')

let fetchNotes = () => {
	try{
		let notesString = fs.readFileSync('notes-data.json'); 
		return JSON.parse(notesString);
	} catch(e) {
		return []
	}
}

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = ( title, body ) =>{
	let notes = fetchNotes()

	let note = {
		title,
		body
	}

	let duplicateNotes = notes.filter( ( note ) => note.title === title )
	if(duplicateNotes.length === 0){
		notes.push(note)
		saveNotes(notes)
		return(note)
	}
	

}
const getAll = () => {
	return fetchNotes()
}
const getNote = ( title ) => {
	let notes = fetchNotes()
	let note = notes.filter( (note) =>  note.title === title )
	return note[0]
}
const removeNote = ( title ) => {
	let notes = fetchNotes()
	let filteredNotes = notes.filter( (note) => note.title !== title )
	saveNotes(filteredNotes)

	return notes.length !== filteredNotes.length
	//Retorna el resultado de la instrucción
}

const logNote = (note) => {
	console.log("____________")
	console.log(`Title: ${ note.title }`)
	console.log(`Body: ${ note.body }`)
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
}






















/**
 * Documentación:
 * vamos a usar module.exports = {}, para exportar funciones que queramos que se usen cuando 
 * se requiera este documento desde otro documento.
 * 
 * 
 * método filter: El método filtel nos devuelve un arreglo con los elementos que hagan match con la 
 * palabra que indiquemos: Ejemplo
 * 	Supungamos en siguiente arreglo palabras = ["Hola", "Que", "Hacer", "Como", "Estas"] y una variable
 * 	para buscar repetidad en el arreglo 
 * 	let buscar = "Hola"
 *	let palabrasRepetidas = palabras.filter((palabra)=>{
			return (palabra === buscar )
	  });
 * 
 */