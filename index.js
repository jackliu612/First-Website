#!/usr/bin/nodejs

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express')
var app = express();

var hbs = require('hbs');

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    
    var user = req.query.user;

    var foods = [
        'tacos',
        'spaghetti',
        'pizza',
        'kutfa'
    ]
    
    var feed_dict = {
        user : user,
        food_list : foods
    }
    
    //  iterate over each element in a list => https://handlebarsjs.com/builtin_helpers.html
    res.render('index');
    
});

app.get('/jack', function(req, res){
    //res.send('Jack');
    setTimeout(res.redirect('/liu'), 30000);
});

app.get('/liu', function(req, res){
    //res.send('Liu');
    setTimeout(res.redirect('/jack'), 30000);
});

// WILDCARD HANDLERS MUST COME AFTER ALL OTHER EXPLICIT ENDPOINTS 
app.get('/users/:userId/books/:bookId', function(req, res){

    res.json(req.params)
});

/*app.get('/foo', function(req, res){
    res.send('requested foo');
});

app.get('/not_a_search', function(req, res){
    var theQuery = req.query.q;
    res.send('query parameter:' + theQuery);
    console.log(theQuery);
});*/



// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});