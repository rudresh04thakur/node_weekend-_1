var util = require('util');
var event = require('events');
var Class = function(){}
util.inherits(Class,event.EventEmitter);

Class.prototype.title = '';
Class.prototype.price = 0;
Class.prototype.author = '';
Class.prototype.pages = 0;
Class.prototype.edition = 0;



Class.prototype.setTitle = function(t){
    title = t
}
Class.prototype.getTitle = function(){
    return title
}


Class.prototype.setPrice = function(p){
    price = p
}
Class.prototype.getPrice = function(){
    return price
}

Class.prototype.setAuthor = function(a){
    author = a
}
Class.prototype.getAuthor = function(){
    return author
}


Class.prototype.getPages = function(){
    return price
}


Class.prototype.setEdition = function(ed){
    edition = ed
}
Class.prototype.getEdition = function(){
    return edition
}

Class.prototype.setPages = function(p){
    pages = p;
    this.emit('getInformation')
    // return Class.prototype.getBookInfo()
}


Class.prototype.getBookInfo = function(){
    return {
        'title':title,
        'author':author,
        'edition':edition,
        'price':price,
        'pages':pages,
    }
}



module.exports = Class;