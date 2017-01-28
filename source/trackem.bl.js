(function(){

  var dao = require('./trackem.dao');

  module.exports = {

    onBoard : function(){
      return dao.onBoard();
    },

    sayHello: function(){
      return 'Hello';
    }
  };
})();
