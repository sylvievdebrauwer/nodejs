console.log("Hello Wold");
console.log("This is a console log from my server.js file");

const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.join(__dirname, "test", "hello.html"));

const fs = require("fs");
// Create folder
// Creating a folder
try {
    fs.mkdirSync(path.join(__dirname, "test"));
  
    // fs.writeFileSync(path.join(__dirname, "test", "log.txt"), "Hello World")
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing in a file
  try {
    const filePath = path.join(__dirname, "test", "log.txt");
  
    fs.writeFileSync(filePath, "Hello World!");
  
    fs.appendFileSync(filePath, " I love Node JS");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
  
  // Read file
  try {
    const fileContent = fs.readFileSync(
      path.join(__dirname, "test", "log.txt"),
      "utf-8"
    );
  
    console.log(fileContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
  
  // Rename file
  try {
    fs.renameSync(
      path.join(__dirname, "test", "log.txt"),
      path.join(__dirname, "test", "new-log.txt")
    );
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
