const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const app = express();
const categories = require('../config/categories');
const router = express.Router();

const TIMEOUT = 3000;

router.get('/', (req, res) => {
    res.send('server is runnning');
})

router.get('/category/:categoryid', async (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.categoryid))
    if (!category) {
        return res.status(400).send('Invalid category')
    }
    const url = `https://www.nhaccuatui.com/bai-hat/${category.name}.html`;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { TIMEOUT });

        const data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.info_song'));

            return items.map(item => {
                const info = item.querySelector('.name_song');
                const cover = item.querySelector('a img');
                const artist = item.querySelector('.name_sing_under');
                if (info || cover) {
                    return {
                        title: info.textContent.trim(),
                        url: info.getAttribute('href'),
                        cover_img: cover.getAttribute('src'),
                        artist: Array.from(artist.querySelectorAll('.name_singer')).map(artist => artist.textContent.trim())
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

router.get('/top100', async (req, res) => {
    const url = 'https://www.nhaccuatui.com/top100/top-100-nhac-tre.m3liaiy6vVsF.html';
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { TIMEOUT });

        const data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.box_info_field'));
            return items.map((item) => {
                const info = item.querySelector('.name_song');
                console.log(info)
                const artist_name = item.querySelector('.list_name_singer');
                const cover_img = item.querySelector('a img');
                if (info || cover_img) {
                    return {
                        title: info.textContent.trim(),
                        url: info.getAttribute('href'),
                        cover_img: cover_img.getAttribute('src'),
                        artist_name: Array.from(artist_name.querySelectorAll('.name_singer')).map(artist => artist.textContent.trim())
                    }
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