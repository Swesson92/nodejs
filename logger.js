
var url = 'http://mylogger.io/log';

function log(message){
    //Skicka iväg en request
    console.log(message);
}

module.exports.log = log;