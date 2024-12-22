// const cors = require('cors');
const express = require('express');
const router = express.Router();
const NhaccuatuiController = require('../controllers/nhaccuatui.controller');
const songs = require('../db/songs');

// get all song by playlist
router.get('/playlist', NhaccuatuiController.getSongsByPlaylist);

// get by each playlist
router.get('/playlist/:playlistid', NhaccuatuiController.getPlaylistSongs);

router.get('/songs/:songid', NhaccuatuiController.getSongById);

router.get('/search/:query', NhaccuatuiController.searchSongsController);

router.get('/songs', async (req, res) => {
    let list = [];
    for (const song of songs) {
        console.log(song.id);
        for (const item of song.songs) {
            list.push(item);
        }
    }

    res.json(list);
})

router.get('/artists', async (req, res) => {
    let set1 = new Set();
    for (const song of songs) {
        console.log(song.id);
        for (const item of song.songs) {
            for (const artist of item.artist) {
                console.log(artist);
                
                set1.add(artist);
            }
        }
    }
    set1 = Array.from(set1);
    res.json(set1);
})

module.exports = router;