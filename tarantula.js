console.log("Starting tarantula........");
const fs = require('fs');

var addNote = (title, content) =>{
  console.log(`Creating new note ${title} with content ${content}`);
  let notes = [];
  let note = {
    title,
    content
  };

  try {
      let fromSource = fs.readFileSync('book-data.json');
      let previousNotes = JSON.parse(fromSource);
      for(var key in previousNotes){
        let previousNote = previousNotes[key];
        notes.push(previousNote);
      }
  } catch (e) {

  }
  var dupli = notes.filter((element) => (element.title===title));
  if(dupli.length===0){
    notes.push(note);
    fs.writeFileSync('book-data.json',JSON.stringify(notes));
  }
  else {
    console.log(`A note with title ${title} already exists`);
  }
}

var delNote = (title) =>{
  console.log(`Deleting note having title ${title}`);
  let fromSource = fs.readFileSync('book-data.json');
  let note = JSON.parse(fromSource);
  note = note.filter(element => element.title !== title);
  fs.writeFileSync('book-data.json',JSON.stringify(note));
}

var readNote = (title) =>{
  console.log(`Reading the note having title ${title}`);
  try {
      let fromSource = fs.readFileSync('book-data.json');
      let note = JSON.parse(fromSource);
      for(let index in note){
        let titbit = note[index];
        console.log(titbit);
        if(titbit.hasOwnProperty('title')){
          if(titbit.title===title)
            console.log(titbit.content);
        }
      }
      if(note.title===title)
        console.log(note.content);
  } catch (e) {

  }
}

var listNote = () =>{
  console.log("Listing all Notes");
  let fromSource = fs.readFileSync('book-data.json');
  let note = JSON.parse(fromSource);
  for(let index in note){
    let titbit = note[index];
    console.log(`${titbit.title} - ${titbit.content}`);
  }
}

module.exports = {
  addNote,
  delNote,
  readNote,
  listNote
}
