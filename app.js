function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Robin');


//För att importera en modul/function(annan fil)
const logger = require('./logger'); //För att ladda modulen
logger.log('message');