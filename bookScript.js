var bookClass = require('./book');
var event = require('events');
// var eventEmitter = new event.EventEmitter();


var book = new bookClass();

book.on('getInformation',function(){ 
    console.log("Info of book ", book.getBookInfo())
})
book.setTitle("Let's C");
book.setPrice(220);
book.setAuthor('Kanetkar');
book.setEdition('11th');
book.setPages(370)


/*
    make student class
    make classRoom class

    insert number of student in classRoom and print info of class with student list
    if possible make search function for student 


*/

