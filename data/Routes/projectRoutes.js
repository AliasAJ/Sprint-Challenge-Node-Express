const express = require('express');
const db = require('../helpers/projectModel');

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

router.post('/', (req, res) => {
    db.insert(req.body)
        .then((response) => {
            res.status(201).json(response);
        })
        .catch((err) => {
            console.err(err);
        })
});


module.exports = router;