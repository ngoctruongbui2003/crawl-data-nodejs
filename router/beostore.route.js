const express = require('express');
const puppeteer = require('puppeteer');
const listCrawl = require('../config/beostore/listsCrawl');
const linkProducts = require('../config/beostore/products');
const TIMEOUT = 30000;
const router = express.Router();
const url = "https://beo2hand.com"
const fs = require('fs');
const path = require('path');
const axios = require('axios');

router.get('/crawl', async (req, res) => {
    const lists = listCrawl;
    const browser = await puppeteer.launch();
    let result = []
    let i = 0;

    for (const list of lists) {
        console.log(`-----START ${i++}-----${new Date()}`);
        console.log("list: ", list);

        try {
            const page = await browser.newPage();
            await page.goto(list, { TIMEOUT });
    
            const data = await page.evaluate(() => {
                const items = Array.from(document.querySelectorAll(".image-resize "));
    
                return items.map((item) => item.getAttribute('href')).filter(Boolean)
            })

            result = [...result, ...data];
        } catch (err) {
            console.log(err);
        }

        console.log(`-----END-----${new Date()}`);
    }

    await browser.close();
    res.json(result);
})

router.get('/products', async (req, res) => {
    const start = 320;
    
    const lists = linkProducts.slice(start, linkProducts.length);
    const browser = await puppeteer.launch();
    let result = []
    let i = start;

    for (const list of lists) {
        console.log(`-----START ${i++}-----${new Date()}`);
        const urlNew = url + list;
        console.log("urlNew: ", urlNew);

        try {
            const page = await browser.newPage();
            await page.goto(urlNew, { TIMEOUT });
    
            const data = await page.evaluate(() => {
                const name = document.querySelector('.head-product-title h1')
                const brand = document.querySelector('.pro-brand a')
                const type = document.querySelector('.pro-type a')
                const sku = document.querySelector('.sku-number')
                const price_now = document.querySelector('.price-now')
                const price_compare = document.querySelector('.price-compare')
                const sizes = document.querySelectorAll(".select-swap .n-sd span")
                const descriptions = document.querySelector(".more-description")

                const imagesEl = document.querySelectorAll(".product-image-feature")
                const images = Array.from(imagesEl).map(img => img.src);

                console.log("images: ", images);
                

                return {
                    name: name?.textContent || '',
                    brand: brand?.textContent || '',
                    type: type?.textContent || '',
                    sku: sku?.textContent || '',
                    price_now: price_now?.textContent || '',
                    price_compare: price_compare?.textContent || '',
                    sizes: Array.from(sizes).map(size => size?.textContent || ''),
                    descriptions: descriptions?.innerHTML || '',
                    images
                }
            })

            await Promise.all(data.images.map(async (imageUrl, index) => {
                const response = await axios({
                    url: imageUrl,
                    method: 'GET',
                    responseType: 'stream'
                });

                const filename = imageUrl.split('/').pop();
                const imagePath = path.join(__dirname, 'images', filename); // Đặt tên cho ảnh
                const writer = fs.createWriteStream(imagePath);

                return new Promise((resolve, reject) => {
                    response.data.pipe(writer);
                    writer.on('finish', () => {
                        console.log(`Downloaded: ${imagePath}`);
                        resolve(); // Hoàn tất tải ảnh
                    });
                    writer.on('error', (err) => {
                        console.error(`Error downloading ${imagePath}:`, err);
                        reject(err); // Thông báo lỗi nếu có
                    });
                });
            }));

            result.push(data);
        } catch (err) {
            console.log(err);
        }

        console.log(`-----END-----${new Date()}`);
    }

    await browser.close();
    res.json(result);
})

module.exports = router;
