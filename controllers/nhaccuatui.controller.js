'use strict'

const playlists = require('../db/playlists');
const NhaccuatuiService = require('../services/nhaccuatui.service');

class NhaccuatuiController {
    async getSongsByPlaylist(req, res) {
        const { url } = req.body;
    
        if (!url) {
            return res.status(400).send('URL is required');
        }
    
        try {
            const data = await NhaccuatuiService.getSongsByPlaylist(url);
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async getPlaylistSongs(req, res) {
        const playlist = playlists.find(c => c.id === parseInt(req.params.playlistid));
        if (!playlist) {
            return res.status(400).send('Invalid playlist');
        }
    
        try {
            const results = await NhaccuatuiService.fetchPlaylistData(playlist.urls);
            res.json({
                playlist: playlist.name,
                songs: results,
            });
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async getSongById(req, res) {
        const song = songs.find((c) => c.id === parseInt(req.params.songid));
        if (!song) {
            return res.status(400).send('Invalid song');
        }
    
        try {
            const songDetails = await NhaccuatuiService.fetchSongDetails(song.href);
            res.json(songDetails);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async searchSongsController(req, res) {
        const query = req.params.query;
    
        try {
            const results = await NhaccuatuiService.searchSongs(query);
            res.json(results);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }
}

module.exports = new NhaccuatuiController();
