// CRUD create add update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')
// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Shivam',
    //     age: 19
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Sahil',
    //         age: 23
    //     }, {
    //         name: 'Nitin',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Running',
    //         completed: true
    //     }, {
    //         description: 'Project work',
    //         completed: false
    //     }, {
    //         description: 'Cleaning house',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5ee3998f13a82836b07a31c5") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 19 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 19 }).count((error, count) => {
    //     console.log(count)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ee389e549e6d2245c131964")
    // }, {
    //     $inc: {
    //         age: -9
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 19
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})