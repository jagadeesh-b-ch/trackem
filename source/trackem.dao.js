(function(){

  var MongoClient = require('mongodb').MongoClient;

  // Connection URL
  var url = 'mongodb://localhost:27017/trackemdata';

  function onBoard(guestProfile){
    // Use connect method to connect to the server
      MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to db server");
        // Get the documents collection
        var collection = db.collection('profiles');
        // Insert some documents
        collection.insert(guestProfile, function(err, result) {
          db.close();
          if(err === null){
            console.log("Profile has been successfully inserted.");
            return true;
          }else{
            console.log("Failed to insert new profile.");
            return false;
          }
          
        });
      });
  }

  module.exports = {
    onBoard : onBoard
  };
})();
