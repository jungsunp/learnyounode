var fs = require("fs");
fs.readFile(process.argv[2], function(error, contents){
    var str = contents.toString();
    console.log(str.split('\n').length-1);
});