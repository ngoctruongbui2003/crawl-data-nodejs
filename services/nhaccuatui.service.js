"use strict";

const puppeteer = require('puppeteer');
const { setTimeout } = require('timers/promises');

class NhaccuatuiService {
    async getSongsByPlaylist(url) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { timeout: 30000 });
    
        const data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('[id^="itemSong"]'));
            return items.map((item) => {
                const info = item.querySelector('.name_song');
                if (info) {
                    return info.getAttribute('href');
                }
                return null;
            }).filter(Boolean);
        });
    
        await browser.close();
        return data;
    }

    async fetchPlaylistData(urls) {
        const browser = await puppeteer.launch();
        const results = [];
        let index = 0;
    
        for (const url of urls) {
            console.log(`-----START ${index++}-----${new Date()}`);
            console.log("URL: ", url);
    
            try {
                const page = await browser.newPage();
                let urlMedia;
    
                page.setRequestInterception(true);
                page.on('request', (request) => {
                    if (request.resourceType() === 'media') {
                        urlMedia = request.url();
                    }
                    request.continue();
                });
    
                await page.goto(url, { waitUntil: 'networkidle2' });
    
                const data = await page.evaluate(() => {
                    const titleElement = document.querySelector('.name_title');
                    const title = titleElement.querySelector('h1');
                    const artists = Array.from(titleElement.querySelectorAll('.name_singer'));
                    const cover = document.getElementById("coverImageflashPlayer").style.background;
                    const lyric = document.getElementById('divLyric');
                    const durationElement = document.querySelector('.utTotalTime');
    
                    return {
                        title: title.textContent.trim(),
                        duration: durationElement.textContent.trim(),
                        cover_img: cover.match(/url\(["']?([^"']*)["']?\)/)[1],
                        artist: artists.map(artist => artist.textContent.trim()),
                        lyric: lyric ? lyric.textContent.trim() : null,
                    };
                });
    
                results.push({
                    ...data,
                    url_media: urlMedia ? urlMedia.slice(0, urlMedia.length - 16) : null,
                });
            } catch (err) {
                console.error(`Error processing URL: ${url}`, err);
            }
    
            console.log(`-----END-----${new Date()}`);
        }
    
        await browser.close();
        return results;
    }

    async fetchSongDetails(url) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        let urlMedia;
    
        try {
            page.setRequestInterception(true);
            page.on('request', (request) => {
                if (request.resourceType() === 'media') {
                    urlMedia = request.url();
                }
                request.continue();
            });
    
            await page.goto(url, { waitUntil: 'networkidle2' });
    
            const data = await page.evaluate(() => {
                const titleElement = document.querySelector('.name_title');
                const title = titleElement.querySelector('h1');
                const artists = Array.from(titleElement.querySelectorAll('.name_singer'));
                const cover = document.getElementById("coverImageflashPlayer").style.background;
                const lyric = document.getElementById('divLyric');
    
                return {
                    title: title.textContent.trim(),
                    cover_img: cover.match(/url\(["']?([^"']*)["']?\)/)[1],
                    artist: artists.map(artist => artist.textContent.trim()),
                    lyric: lyric ? lyric.textContent.trim() : null,
                };
            });
    
            await page.click('body');
            await new Promise((resolve) => setTimeout(resolve, 3000));
            await page.click('body');
    
            return {
                ...data,
                url_media: urlMedia ? urlMedia.slice(0, urlMedia.length - 16) : null,
            };
        } catch (err) {
            throw err;
        } finally {
            await browser.close();
        }
    }

    async searchSongs(query) {
        const url = `https://www.nhaccuatui.com/tim-kiem?q=${query}`;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
        try {
            await page.goto(url, { waitUntil: 'networkidle2' });
    
            const results = await page.evaluate(() => {
                const items = Array.from(document.querySelectorAll('.sn_search_single_song'));
    
                return items.map((item) => {
                    const info = item.querySelector('.box_info .title_song a');
                    const coverImg = item.querySelector('a img');
                    const artist = item.querySelector('.box_info .singer_song');
    
                    if (info) {
                        return {
                            title: info.getAttribute('title'),
                            url: info.getAttribute('href'),
                            cover: coverImg ? coverImg.getAttribute('src') : null,
                            artist: Array.from(artist.querySelectorAll('a')).map((a) => a.textContent.trim()),
                        };
                    }
                    return null;
                }).filter(Boolean); // Remove null entries
            });
    
            return results;
        } catch (err) {
            throw err;
        } finally {
            await browser.close();
        }
    }
}

module.exports = new NhaccuatuiService();
