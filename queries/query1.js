const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("CS5200Project2");

        // query 1. aggregation query
        // find the total number of artworks for each artist
        const artworks = database.collection('Artwork');
        const totalArtworksPerArtist = await artworks.aggregate([
            { $group: { _id: "$artist", totalArtworks: { $sum: 1 } } }
        ]).toArray();
        console.log("Total artworks per artist:", totalArtworksPerArtist);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
