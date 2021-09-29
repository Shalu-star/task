//CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID,} = require('mongodb') //Using destructuring

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }
    
    console.log('connected correctly')

    const db = client.db(databaseName)

    //CREATE
    
    //  db.collection('users').insertOne({
    //       _id: id,
    //     name:'Vikram',
    //     age: 29
    // },(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age:28
    //     },
    //     {
    //         name:'Gaunther',
    //         age:27
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Be energized',
    //         completed:true
    //     },
    //     {
    //         description:'Be tired',
    //         completed:false
    //     },
    //     {
    //         description:'Be refresh',
    //         completed:true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })
    
    
    //READ

    // db.collection('users').findOne({ _id:new ObjectID("6151f71f03cf7c2e1894f1b1")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    

    // db.collection('users').find({age:27}).toArray((error,count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id:new ObjectID("6151db96affe0a04402808e5")},(error,result) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(result)


    //     db.collection('tasks').find({completed:true}).toArray((error,result)=>{
    //         if(error){
    //             return console.log('Unable to fetch')
    //         }
    //         console.log(result)
    //     })
    // })


    //UPDATE

    //  db.collection('users').updateOne({ _id:new ObjectID("6151d84e6f9b7f16a08fa1b0")},{
    //     // $set: {
    //     //     name:'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }

    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)

    // })


    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //DELETE

    // db.collection('users').deleteMany({age:27}).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    db.collection('tasks').deleteOne({description:'Be tired'}).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})