const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("CS5200Project2");

        // query 3. counting documents for a specific user
        // count the number of artworks collected by a specific collector
        const artworks = database.collection('Artwork');
        const specificCollectorName = "Berget Collen";
        const count = await artworks.countDocuments({ 'collector.collectorName': specificCollectorName });
        console.log(`Number of artworks collected by ${specificCollectorName}:`, count);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
