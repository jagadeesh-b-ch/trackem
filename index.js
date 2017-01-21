(function(){
  var express = require('express')();
  var bl = require('./source/trackem.bl');

  express.get('/loadProfile', function(req, res){
    res.send(bl.sayHello());
  });

  express.get('/loadContacts', function(req, res){

  });

  express.get('/loadLocation', function(req, res){

  });

  express.listen(3000, function(){
    console.log('Application listening on port 3000');
  });

})();
