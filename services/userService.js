require('dotenv').config();

const mongodb = require('mongodb');
const MongoDBClient = mongodb.MongoClient

// connect to DB
let cachedClient = null;
let cachedDB = null;

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

const getAllUsers = async () => {
    const client = await connectToDatabase();
    const db = client.db('admin');

    result = await db.collection('testMES').find({}).toArray();

    return(result)
};

const getOneUser = () => {
    return;
};

const createNewUser = () => {
    return;
};

const updateOneUser = () => {
    return;
};

const deleteOneUser = () => {
    return;
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};