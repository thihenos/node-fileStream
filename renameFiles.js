//Requiring fs libary for file streaming in Node
let fs = require('fs');

let count = 0;//Variable for counting the amount of files in the folder
let files = [];//Array created for temporarily save the files

//Reading all files synchronous from folder files and using forEach to navigate through the array of files
fs.readdirSync('./files').forEach(file => {
	files.push(file);//pushing the filename to the aux array
	console.log(file);
});

/* Here, forEach with files variable to read each file individually, the function inside the for each
 * extracts the filename itself and its index in the folder
 */
files.forEach(function(item, index){
	/* at this point, we are using function renameSync, 
	 * so in the first parameter you pass the path from the file we want to change the name
	 * in the second parameter, we declare the destiny folder and the new name of it
	 * in this example, we are using the index, or the position of the file to rename ir
	 */
	fs.renameSync('./files/'+item, './files/'+index+'.txt', function(err){
		if(err){
			//In case it has any error during the rename process, it will stops and show us the error
			throw err;	
		}else{
			count++;	
		}
	});
});