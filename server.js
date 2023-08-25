require('dotenv').config();

// grab packages
const express = require('express');
const mongodb = require('mongodb');

const mongoose = require('mongoose');



// configure app
const app = express();

const MongoDBClient = mongodb.MongoClient

const port = process.env.PORT || 3010;

// connect to DB
let cachedClient = null;
let cachedDB = null;

// TODO fix database connection
async function connectToDatabase() {
    if (cachedDB) return cachedDB;
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


    }
    catch(error) {
        console.log(error);
        console.log('Mongo is not connected');
    }
    finally {
        return db;
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

// read
// app.get('/users', async (req, res) => {
//     const db = await connectToDatabase();
//     const users = db.collection("users").find({}).toArray();

//     res.json({users})
// })

// udpate

// delete


//create server
app.listen(port, () =>{
    console.log('Our app is running on port ', port);
});