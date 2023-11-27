const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("CS5200Project2");

        // query 5. retrieve all documents in a collection
        // retrieve all documents from the Gallery collection
        const galleries = database.collection('Gallery');
        const allGalleries = await galleries.find({}).toArray();
        console.log("All galleries:", allGalleries);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
