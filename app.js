console.log("Starting application");

const _ = require('lodash');
const file = require('fs');
const yargs = require('yargs');
const moment = require('moment');

const tarantula = require('./tarantula.js');

var arguments = yargs.argv;
var command = arguments._[0];

moment.locale('es');
var date = moment().format('DD MMMM YYYY');
console.log(date);

if (command==='Add') {
  tarantula.addNote(arguments.title, arguments.content);
} else if(command==='Delete') {
  tarantula.delNote(arguments.title);
} else if(command==='Read') {
  console.log(arguments);
  tarantula.readNote(arguments.title);
} else if(command==='List') {
  tarantula.listNote();
} else {
  console.log("Unrecognized command");
}
