const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('server is runnning');
})

router.use('/nhaccuatui', require('./nhaccuatui.route'));
router.use('/beostore', require('./beostore.route'));

module.exports = router;