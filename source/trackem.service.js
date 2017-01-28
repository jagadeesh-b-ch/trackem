(function(){

  var express = require('express')();
  var bl = require('./trackem.bl');
  var constants = require('./trackem.constants');

  module.exports  = {
    initiateServices : function(){

      express.get(constants.onBoardingService, function(req, res){
        var result = bl.onBoard();
        if(result){
          res.send('Profile has been successfully created.')
        }else{
          res.send('Profile has not been successfully created.')
        }
      });

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
