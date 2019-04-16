var access = require('./LinkedList');
var readlineSync = require('readline-sync');
const fs = require('fs');
function unordered() {
    
    //reading the file
    var list = fs.readFileSync("stringfile.txt", "utf-8", (err, data) => {
        if (err) throw "File not found"
        
    });
    console.log("data in file "+list);
    //storing the list into array
    var words = list.split(" ");
    console.log("words",words);
    var unorderedlist = new access.LinkedList();
    //adding the elements of the file which is stored in words array to the linkedlist
    for (var i = 0; i < words.length; i++) {
        unorderedlist.add(words[i]);
    }
    unorderedlist.show();
    var word = readlineSync.question("Enter the string to be searched in the file list");
    //search for the word in the list,if found remove,if not found add the word to list
    if (unorderedlist.search(word)) {
        unorderedlist.remove(word);
    }
    else {
        unorderedlist.add(word);
    }
    var string = unorderedlist.getData();
    fs.writeFile("stringfile.txt", string);
    console.log("The file is");
    unorderedlist.show();
}
unordered();
