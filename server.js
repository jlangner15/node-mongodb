require('dotenv').config();

// grab packages
const express = require('express');
const mongodb = require('mongodb');

// configure app
const app = express();

const MongoDBClient = mongodb.MongoClient

const port = process.env.PORT || 3001;

// connect to DB
let cachedClient = null;
let cachedDB = null;

// TODO fix database connection
// async function connectToDatabase() {
//     if (cachedDB) return cachedDB;

//     const client = await MongoDBClient.connect(process.env.DATABASE_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         tlsCAFile: ".TODO GET DB CERTIFICATE"
//     });

//     const db = client.db('users');

//     cachedClient = client;
//     cachedDB = db;

//     return db

// }


// create routes
app.get('/', (req, res) => {
    console.log('Hello!')
    res.send('Hello World!')
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