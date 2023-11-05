const express = require('express');
const router = express.Router();

router.post('/token', (req, res) => {
    res.send({
        token: 'test123'
    })
})
module.exports = router