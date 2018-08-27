//Requiring fs libary for file streaming in Node
let fs = require('fs');

//Reading all files synchronous from folder files and using forEach to navigate through the array of files
fs.readdirSync('./files').forEach(file => {
	//We can use the var file from the callback, to delete the file in parameter of the function 
	fs.unlink("./files/"+file);
	//Or you can simples just call it with the file you want to remove like
	//fs.unlink("./files/file.txt");

});