(function(){

  var dao = require('./trackem.dao');

  module.exports = {

    loadProfile : function(){
      dao.loadProfile();
      return 'Connection successful';
    },

    sayHello: function(){
      return 'Hello';
    }
  };
})();
