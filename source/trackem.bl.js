(function(){

  var dao = require('./trackem.dao');

  function onBoard(guestProfile){
    return dao.onBoard(guestProfile);
  }

  function sayHello(){
    return 'Hello';
  }

  module.exports = {
    onBoard : onBoard,
    sayHello: sayHello
  };
})();
