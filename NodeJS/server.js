var fs = require('fs');

var dir = './monDossier';

//show the current directory name
console.log(__dirname);

// creat new directory "monDossier" if doesn't exist
if (!fs.existsSync(dir)) {
    
    fs.mkdirSync(dir);
}
