const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// create a database connection

var dbName = "fetcher";
mongoose.connect(`mongodb://localhost/${dbName}`,{useMongoClient: true  } ,function(err,db){
      if(err) throw err;
      console.log(`database ${dbName} was created`);
  });


  // this is my schema
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : Number,
  name : String,
  full_name : String,
  owner_login : String,
  owner_id : Number,
 description : String,
 url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, repo) => {
  if (err) return console.error(err);




  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}


module.exports.save = save;