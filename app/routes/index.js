let express = require('express');
let router = express.Router();

const {
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
} = require('../db/dbOperations');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const artists = await getArtists();
    res.render('index', { title: 'Art and Artist Management System', artists });
  } catch (error) {
    next(error);
  }
});

/* GET artworks page. */
router.get('/artworks', async function (req, res, next) {
  try {
    const artworks = await getAllArtworks();
    res.render('allArtworks', { artworks });
  } catch (error) {
    next(error);
  }
});

/* GET artworks by a specific artist. */
router.get('/artist/:artistID', async function (req, res, next) {
  try {
    const artistID = req.params.artistID;
    const artworks = await getArtworksByArtist(artistID);
    res.render('artworks', { artistID, artworks });
  } catch (error) {
    next(error);
  }
});

/* Render a form to create a new artist. */
router.get('/artistCreate/new', function (req, res, next) {
  res.render('createArtist', { title: 'Create Artist' });
});

/* Handle form submission to create a new artist. */
router.post('/artist', async function (req, res, next) {
  try {
    await createArtist(req.body);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

/* Render a form to update an existing artist. */
router.get('/artist/:artistID/edit', async function (req, res, next) {
  try {
    const artist = await getArtistById(req.params.artistID);
    res.render('updateArtist', { artist });
  } catch (error) {
    next(error);
  }
});

/* Handle form submission to update an existing artist. */
router.put('/artist/:artistID', async function (req, res, next) {
  try {
    await updateArtist(req.params.artistID, req.body);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

/* Handle deletion of an artist. */
router.delete('/artist/:artistID', async function (req, res, next) {
  try {
    await deleteArtist(req.params.artistID);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

/* Render a form to create a new artwork. */
router.get('/artwork/new', function (req, res, next) {
  res.render('createArtwork', { title: 'Create Artwork' });
});

/* Handle form submission to create a new artwork. */
router.post('/artwork', async function (req, res, next) {
  try {
    await createArtwork(req.body);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

/* Render a form to update an existing artwork. */
router.get('/artwork/:artworkID/edit', async function (req, res, next) {
  try {
    const artwork = await getArtworkById(req.params.artworkID);
    res.render('updateArtwork', { artwork });
  } catch (error) {
    next(error);
  }
});

/* Handle form submission to update an existing artwork. */
router.put('/artwork/:artworkID', async function (req, res, next) {
  try {
    await updateArtwork(req.params.artworkID, req.body);
    res.redirect('/artworks');
  } catch (error) {
    next(error);
  }
});

/* Handle deletion of an artwork. */
router.delete('/artwork/:artworkID', async function (req, res, next) {
  try {
    await deleteArtwork(req.params.artworkID);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
