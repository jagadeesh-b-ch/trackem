(function(){

  var express = require('express')();
  var bl = require('./trackem.bl');

  module.exports  = {
    initiateServices : function(){

      express.get('/trackem/loadProfile', function(req, res){
        res.send(bl.loadProfile());
      });

      express.get('/trackem/loadContacts', function(req, res){

      });

      express.get('/trackem/loadLocation', function(req, res){

      });

      express.listen(3000, function(){
        console.log('Application listening on port 3000');
      });
    }

  };

})();
