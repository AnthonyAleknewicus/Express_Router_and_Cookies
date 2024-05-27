const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next()
    }
    res.send("SORRY NOT AN ADMIN!")
})

router.get('/topsecret', (req, res) => {
    res.send("IT'S A SECRET TO EVERYBODY");
})

router.get('/delete', (req, res) => {
    res.send("DELETE IT ALL!");
})


module.exports = router;