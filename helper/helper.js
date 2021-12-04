const db = require('../config/connection/mongoConnection')
const collection = require('../config/collection/userCollection')
const objectId = require('mongodb').ObjectId

module.exports ={
    // insert data to database
    insertPostData: async (req,res)=>{
        if(req.params.insertedData){
       let result =  await db.get().collection(collection.USERCOLLECTION).insertOne({toDo:req.params.insertedData})
       let response = await db.get().collection(collection.USERCOLLECTION).findOne({_id:result.insertedId})
            if(result){
                res.status(200).json(response)
            }else{
                res.status(200).json(false)
            }
        }
    },
    // fetch data from database
    fetchData: async (req,res)=>{
        response = await db.get().collection(collection.USERCOLLECTION).find().toArray()
        if(response.length){
            res.status(200).json(response)
        }else{
            res.status(200).json(false)
        }
    },
    // delete data from database
    deleteData: async (req,res)=>{
       let response = await db.get().collection(collection.USERCOLLECTION).deleteOne({_id:objectId(req.params.dataId)})
       console.log(response);
       if(response){
        res.status(200).json(response)
       }else{
        res.status(200).json(false)
       }
    }
}