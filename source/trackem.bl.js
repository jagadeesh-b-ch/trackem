(function(){

  var dao = require('./trackem.dao');

  module.exports = {

    onBoard : function(guestProfile){
      return dao.onBoard(guestProfile);
    },

    sayHello: function(){
      return 'Hello';
    }
  };
})();
