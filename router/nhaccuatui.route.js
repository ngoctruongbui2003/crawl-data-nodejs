// const cors = require('cors');
const express = require('express');
const puppeteer = require('puppeteer');
const songs = require('../config/songs');
const { setTimeout } = require('timers/promises');
const playlists = require('../config/playlists');
const router = express.Router();

const TIMEOUT = 30000;

router.get('/playlist', async (req, res) => {
    const url = 'https://www.nhaccuatui.com/playlist/nhac-thinh-hanh-rose-blackpink-ft-jennie-ft-mono-ft-rap-viet-ft-aespa-ft-captain-ft-dangrangto-ft-da-lab-ft-anh-trai-say-hi-ft-tlinh-ft-le-bao-binh-ft-isaac-ft-khanh-phuong-ft-nicky-ft-vu-ft-linh-huong-luz-ft-dieu-van-ft-ngo-lan-huong-ft-pialinh-ft-rhyder-ft-negav-ft-wxrdie-ft-quang-trung-ft-lisa-blackpink-ft-24kright-ft-wn-ft-khiem-ft-vuong-vu-tru-leto-ft-wren-evans-ft-nayeon-twice-ft-duong-minh-tuan-ft-kha-ft-shartnuss.rpl-1-5-d304-2024.html?st=5';
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { TIMEOUT });

        const data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('[id^="itemSong"]'));

            return items.map((item) => {
                const info = item.querySelector('.name_song');
                console.log(info)
                // const artist_name = item.querySelector('.name_singer');
                // const cover_img = item.querySelector('a img');
                if (info) {
                    // return {
                    //     // title: info.textContent.trim(),
                    //     url: info.getAttribute('href'),
                    //     // cover_img: cover_img.getAttribute('src'),
                    //     // artist_name: Array.from(artist_name.querySelectorAll('.name_singer')).map(artist => artist.textContent.trim())
                    // }
                    return info.getAttribute('href');
                }
                else { return null }
            }).filter(Boolean)
        })
        await browser.close();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('server errror');
    }
})

router.get('/playlist/:playlistid', async (req, res) => {
    const playlist = playlists.find(c => c.id === parseInt(req.params.playlistid))
    if (!playlist) {
        return res.status(400).send('Invalid playlist')
    }

    const urls = playlist.urls;
    const browser = await puppeteer.launch();
    let result = []
    let i = 0;

    for (const url of urls) {
        console.log(`-----START ${i++}-----${new Date()}`);
        console.log("URL: ", url);
        try {
            const page = await browser.newPage();
            let url_media;
            
            page.setRequestInterception(true);
            page.on('request', (request) => {
                if (request.resourceType() === 'media') {
                    url_media = request.url();
                }
                request.continue();
            });
            
            await page.goto(url, { waitUntil: 'networkidle2' });
            const data = await page.evaluate(() => {
                const titleElement = document.querySelector('.name_title')
                const title = titleElement.querySelector('h1');
                const artists = Array.from(titleElement.querySelectorAll('.name_singer'))
                
                const cover = document.getElementById("coverImageflashPlayer").style.background;
                const lyric = document.getElementById('divLyric');

                return {
                    title: title.textContent.trim(),
                    cover_img: cover.match(/url\(["']?([^"']*)["']?\)/)[1],
                    artist: artists.map(artist => artist.textContent.trim()),
                    lyric: lyric.textContent.trim()
                }
            })

            // console.log("DATA: ", data);
            

            await page.click('body');
            await setTimeout(3000);
            await page.click('body');

            // console.log("result: ", result);

            result.push({
                ...data,
                url_media: url_media.slice(0, url_media.length - 16)
            })
        } catch (err) {
            console.log(err);
            res.status(500).send('server errror');
        }

        console.log(`-----END-----${new Date()}`);
    }
    
    await browser.close();
    res.json(result);
})

router.get('/songs/:songid', async (req, res) => {
    const song = songs.find(c => c.id === parseInt(req.params.songid))
    if (!song) {
        return res.status(400).send('Invalid song')
    }
    const url = song.href;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        let url_media;
        
        page.setRequestInterception(true);
        page.on('request', (request) => {
            if (request.resourceType() === 'media') {
                url_media = request.url();
            }
            request.continue();
        });
        
        await page.goto(url, { waitUntil: 'networkidle2' });
        const data = await page.evaluate(() => {
            const titleElement = document.querySelector('.name_title')
            const title = titleElement.querySelector('h1');
            const artists = Array.from(titleElement.querySelectorAll('.name_singer'))
            
            const cover = document.getElementById("coverImageflashPlayer").style.background;
            const lyric = document.getElementById('divLyric');

            return {
                title: title.textContent.trim(),
                cover_img: cover.match(/url\(["']?([^"']*)["']?\)/)[1],
                artist: artists.map(artist => artist.textContent.trim()),
                lyric: lyric.textContent.trim()
            }
        })
        await page.click('body');
        await setTimeout(3000);
        await page.click('body');

        await browser.close();

        res.json({
            ...data,
            url_media: url_media.slice(0, url_media.length - 16)
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }
})

router.get('/search/:query', async (req,res) => {
    const query = req.params.query;
    const url = `https://www.nhaccuatui.com/tim-kiem?q=${query}`;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { TIMEOUT });

        const data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.sn_search_single_song'));

            return items.map(item => {
                const info = item.querySelector('.box_info .title_song a');
                const cover_img = item.querySelector('a img');
                const artist = item.querySelector('.box_info .singer_song');
                if (info) {
                    return {
                        title: info.getAttribute('title'),
                            url: info.getAttribute('href'),
                            cover: cover_img.getAttribute('src'),
                            artist: Array.from(artist.querySelectorAll('a')).map(artist => artist.textContent.trim())
                        }
                } else {
                    return null;
                }
            }).filter(Boolean); // filter out null values
        })
        await browser.close();

        res.json(data);

    } catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }
})

module.exports = router;