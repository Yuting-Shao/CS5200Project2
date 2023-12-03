const { getDb } = require('./mongoConnection');
const { ObjectId } = require('mongodb');

async function getArtists() {
    try {
        const db = getDb();
        return await db.collection('Artist').find().limit(100).toArray();
    } catch (error) {
        console.error('Error getting artists:', error);
        throw error;
    }
}

async function createArtist(data) {
    try {
        const db = getDb();
        const result = await db.collection('Artist').insertOne(data);
        return result.ops[0];
    } catch (error) {
        console.error('Error creating artist:', error);
        throw error;
    }
}

async function updateArtist(artistID, data) {
    try {
        const db = getDb();
        await db.collection('Artist').updateOne({ _id: new ObjectId(artistID) }, { $set: data });
        return { _id: artistID, ...data };
    } catch (error) {
        console.error('Error updating artist:', error);
        throw error;
    }
}

async function getArtistById(artistID) {
    try {
        const db = getDb();
        return await db.collection('Artist').findOne({ _id: new ObjectId(artistID) });
    } catch (error) {
        console.error('Error getting artist by ID:', error);
        throw error;
    }
}

async function deleteArtist(artistID) {
    try {
        const db = getDb();
        await db.collection('Artist').deleteOne({ _id: new ObjectId(artistID) });
        return { artistID };
    } catch (error) {
        console.error('Error deleting artist:', error);
        throw error;
    }
}

async function getAllArtworks() {
    try {
        const db = getDb();
        return await db.collection('Artwork').find().limit(100).toArray();
    } catch (error) {
        console.error('Error getting all artworks:', error);
        throw error;
    }
}

async function createArtwork(data) {
    try {
        const db = getDb();
        // Embedding artist details
        if (data.artistId) {
            const artist = await db.collection('Artist').findOne({ _id: new ObjectId(data.artistId) });
            if (artist) {
                data.artist = {
                    _id: artist._id,
                    name: artist.name,
                    biography: artist.biography,
                    style: artist.style,
                    totalExhibitions: artist.totalExhibitions
                };
            }
            delete data.artistId; // Remove artistId field if present
        }
        const result = await db.collection('Artwork').insertOne(data);
        return result.ops[0];
    } catch (error) {
        console.error('Error creating artwork:', error);
        throw error;
    }
}

async function updateArtwork(artworkID, data) {
    try {
        const db = getDb();
        await db.collection('Artwork').updateOne({ _id: new ObjectId(artworkID) }, { $set: data });
        return { _id: artworkID, ...data };
    } catch (error) {
        console.error('Error updating artwork:', error);
        throw error;
    }
}

async function getArtworkById(artworkID) {
    try {
        const db = getDb();
        return await db.collection('Artwork').findOne({ _id: new ObjectId(artworkID) });
    } catch (error) {
        console.error('Error getting artwork by ID:', error);
        throw error;
    }
}

async function deleteArtwork(artworkID) {
    try {
        const db = getDb();
        await db.collection('Artwork').deleteOne({ _id: new ObjectId(artworkID) });
        return { artworkID };
    } catch (error) {
        console.error('Error deleting artwork:', error);
        throw error;
    }
}

module.exports = {
    getArtists,
    createArtist,
    updateArtist,
    getArtistById,
    deleteArtist,
    getAllArtworks,
    createArtwork,
    updateArtwork,
    getArtworkById,
    deleteArtwork
};
