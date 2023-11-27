const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("CS5200Project2");

        // query 2. complex search criterion
        // find all artworks created after a certain date and with a price greater than a specified amount
        const artworks = database.collection('Artwork');

        // convert string to date
        await artworks.updateMany(
            {}, 
            [{ $set: { creationDate: { $toDate: "$creationDate" } } }]
        );

        const complexSearch = await artworks.find({
            creationDate: { $gt: new Date("2018-01-01") },
            price: { $gt: 6000 }
        }).toArray();
        console.log("Artworks matching complex criteria:", complexSearch);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
