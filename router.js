// Require the necessary modules
const nukemIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

// Require express and create an express router object
const express = require('express');
const router = express.Router();

// Route that serves index.html
router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  // Capture the contents of index.html in a variable
  let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
  // Send a response to the client with the index.html file
  response.write(fileContents);
  response.end();
});

// Route that generates the nukem ipsum text and reloads a modified index.html
router.post('/nukem', (request, response) => {
  request.on("data", function(inputValue) {
    // Convert the POST data into a readable string
    let query = inputValue.toString(); // i.e. numberOfParagraphs=3
    // Parse the query into a key/value pair and store the value of numberOfParagraphs
    // in a variable
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    // Generate the nukem ipsum text with the getAllParagraphs function
    let nukemIpsumText = nukemIpsum.getAllParagraphs(numberOfParagraphs);
    // Capture the contents of index.html in a variable
    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
    // Replace the placeholder <div> with the nukem ipsum text
    fileContents = fileContents.replace("<div class='placeholder-div'></div>",nukemIpsumText);;
    response.setHeader('Content-Type', 'text/html');
    // Send a response to the client with the modified index.html file
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;
