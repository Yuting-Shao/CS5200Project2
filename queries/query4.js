const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("CS5200Project2");

        // query 4. updating a document based on a query parameter
        // toggle the availability status of an artwork
        const artworks = database.collection('Artwork');
        const specificArtworkId = "8d6a6d8a-4111-4f3b-bfb7-117df81ef34c";
        const updateResult = await artworks.updateOne({ _id: specificArtworkId },
            { $set: { availabilityStatus: "available" } });
        console.log("Updated artwork:", updateResult);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
