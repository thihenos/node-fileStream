//Requiring fs libary for file streaming in Node
let fs = require('fs');

let files = [];//Array created for temporarily save the files

//Reading all files synchronous from folder files and using forEach to navigate through the array of files
fs.readdirSync('./files').forEach(file => {
	//We can use the var file from the callback, to read the file in parameter of the function 
	fs.readFile('./files/'+file,'utf8', function(err,data){
		//Printing the data result in the terminal
		console.log(data);
	});
});