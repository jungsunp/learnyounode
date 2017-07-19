var fs = require("fs");
var contents = fs.readFileSync(process.argv[2]);
var str = contents.toString();
console.log(str.split('\n').length-1);