const express = require('express');
const db = require('../data/helpers/projectModel.js');

const router = express.Router();


router.get('/', (req, res) => {
    db.get()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.error(err);
        })
});

router.get('/:id', (req, res) => {
    db.get(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.error(err);
        })
});

module.exports = router;