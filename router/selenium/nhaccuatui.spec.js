const { By, Builder, WebElementCondition, until } = require('selenium-webdriver');
const fs = require('fs');
const axios = require('axios');
const songs = require('../../config/songs');
const path = require('path');

const urlMediaListTemp = songs.flatMap(item => item.songs.map(song => song.url_media));

const urlMediaList = urlMediaListTemp.slice(urlMediaListTemp.length - 3, urlMediaListTemp.length);

(async function downloadAudio() {
    const musicDir = path.join(__dirname, 'assets', 'music');

    console.log(`Tổng cộng ${urlMediaList.length} bài`);

    if (!fs.existsSync(musicDir)) {
        fs.mkdirSync(musicDir, { recursive: true });
    }

    let driver = await new Builder().forBrowser('chrome').build();
    let i = 0;

    try {
        for (const url of urlMediaList) {
            console.log(`Đang tải âm thanh thứ ${++i}...`);
            console.log(`Đang truy cập vào URL: ${url}`);
            
            
            await driver.get(url);

            await driver.sleep(2000);

            let audioElement = await driver.findElement(By.css('source[type="audio/mpeg"]'));
            let audioUrl = await audioElement.getAttribute('src');

            const audioFileName = audioUrl.split('/').pop().split('?')[0];

            const filePath = path.join(musicDir, audioFileName);

            console.log(filePath);

            const response = await axios({
                url: audioUrl,
                method: 'GET',
                responseType: 'stream',
            });

            const writer = fs.createWriteStream(filePath);

            response.data.pipe(writer);

            writer.on('finish', () => {
                console.log(`Tải âm thanh "${audioFileName}" thành công!`);
            });

            writer.on('error', (err) => {
                console.error(`Lỗi khi tải âm thanh "${audioFileName}":`, err);
            });

            await new Promise((resolve) => writer.on('finish', resolve));

            console.log('Đã tải xong âm thanh!');
            console.log('-----------------------------------');
            
        }
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    } finally {
        await driver.quit();
    }
})();
