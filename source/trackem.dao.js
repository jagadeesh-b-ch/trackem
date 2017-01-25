(function(){

  var MongoClient = require('mongodb').MongoClient;

  // Connection URL
  var url = 'mongodb://localhost:27017/trackemdata';

  module.exports = {
    loadProfile : function(){
      // Use connect method to connect to the server
      MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to db server");
        // Get the documents collection
        var collection = db.collection('profiles');
        // Insert some documents
        collection.insertMany([
          {name : 'Jagadeesh Babu Chitta', mobile : '9908494380', mail : 'jagadeesh7.chitta@gmail.com'},
          {name : 'Bala Paparao Chitta', mobile : '9966120411', mail : 'paparao.chitta@gmail.com'},
          {name : 'Hymavathi Chitta', mobile : '8885679318', mail : 'hymavathi.chitta@gmail.com'}
        ], function(err, result) {
          if(err === null){
            console.log("Inserted 3 documents into the collection");
          }else{
            console.log("Failed to insert 3 documents into the collection");
          }
          db.close();
        });
      });
    }
  };
})();
