require('dotenv').config();

// grab packages
const express = require('express');
const mongodb = require('mongodb');

const mongoose = require('mongoose');



// configure app
const app = express();

const MongoDBClient = mongodb.MongoClient

const port = process.env.PORT || 3000;

// connect to DB
let cachedClient = null;
let cachedDB = null;

// TODO fix database connection
async function connectToDatabase() {
    if (cachedDB) return cachedClient;

    let client, db;
    try {
        client = await MongoDBClient.connect(
            process.env.DATABASE_URL
            , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true
        })

        console.log('Mongo is connected');

        db = client.db('admin');

        cachedClient = client;
        cachedDB = db;

        return client;
    }
    catch(error) {
        console.log(error);
        console.log('Mongo is not connected');
    }
    finally {
        return client;
    }
}


// create routes
app.get('/', async (req, res) => {

    const db = await connectToDatabase();

    if (db === undefined)
    {
        res.send('Could not connect to DB!')
    }
    else {
        res.send('Connected to DB!')
    }
});

// create
// app.get('/new-user', async (req, res) => {
//     const client = await connectToDatabase();
//     const db = client.db('admin');
//     console.log('here in create');
//     db.collection("testMES").insertOne({
//         "id": 3,
//         "username": "TEST3",
//         "role": "user"
//     })

//     res.send('success adding');
// })


// read
app.get('/users', async (req, res) => {
    const client = await connectToDatabase();
    const db = client.db('admin');

    result = await db.collection('testMES').find({}).toArray();
    console.log(result);

    res.send(result)
})

// update

// app.get('/update-user', async (req, res) => {
//     const client = await connectToDatabase();
//     const db = client.db('admin');

//     result = await db.collection('testMES').updateOne(
//         {"id": 2}, {$set: {
//         username: 'JJL15'
//         }});
//     console.log(result);

//     res.send('success')
// })

// delete
// app.get('/delete-user', async (req, res) => {
//     const client = await connectToDatabase();
//     const db = client.db('admin');

//     result = await db.collection('testMES').deleteMany(
//         {"id": 3});
//     console.log(result);

//     res.send('success delete')
// })


//create server
app.listen(port, () =>{
    console.log('Our app is running on port ', port);
});