(function(){

  var express = require('express')();
  var bl = require('./trackem.bl');
  var constants = require('./trackem.constants');
  var response = require('./response.dto');

  module.exports  = {
    initiateServices : function(){

      express.get(constants.onBoardingService, function(req, res){
        var profile = {
          name : 'Jaggu',
          mobile : '8939323189'
        };
        var result = bl.onBoard(profile);
        if(result){
          var serviceResp = new response.response();
          serviceResp.respCode = 0;
          serviceResp.respDesc = 'Profile has been successfully created.';
          res.send(serviceResp)
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
