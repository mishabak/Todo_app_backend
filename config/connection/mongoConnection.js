mongoClient = require('mongodb').MongoClient;
const state ={
    db:null
}

module.exports.Connect = (callback)=>{
 const url = 'mongodb://localhost:27017'; // url of the database
  const dbName = 'ToDo';  //  database name
   mongoClient.connect(url,(err,data)=>{
       if(err) return callback(err)

       state.db = data.db(dbName)
       callback()
   })

}
module.exports.get = ()=>{
    return state.db
}