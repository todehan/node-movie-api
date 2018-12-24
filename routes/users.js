const express = require('express');
const router = express.Router();

// GET user listing
router.get('/', (req, res, next) => {
    res.send('respond wirh a resource');
});

module.exports = router;