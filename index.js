import { MongoClient } from "mongodb";

const conn_uri = 'mongodb+srv://devgobind14:FSV6YS4vLFXvjzu4@cluster0.7ve2ijy.mongodb.net/';

async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
        const myDb = mongoClient.db('Test');
        const col = myDb.collection('exception');
        const doc = { name: "Neapolitan pizza", shape: "round" };
        const result = await col.insertOne(doc);
        console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
        );
        mongoClient.close();
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

 connectToCluster(conn_uri);