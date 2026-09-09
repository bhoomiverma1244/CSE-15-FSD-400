//exp2
const fs = require("fs");

// cREATE a file
fs.writeFileSync("demo.txt", "Hello, this is my file.");

// READ the file
let data = fs.readFileSync("demo.txt", "utf8");
console.log("File content:", data);

// UPDATE the file
fs.appendFileSync("demo.txt", "\nThis is updated content.");

data = fs.readFileSync("demo.txt", "utf8");
console.log("After update:", data);

// DELETE the file
fs.unlinkSync("demo.txt");
//sb
console.log("File deleted successfully.");