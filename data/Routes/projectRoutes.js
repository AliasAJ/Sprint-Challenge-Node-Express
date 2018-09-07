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

router.put('/edit/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then((response) => {
            if (response === 0) {
                res.status(404).json({ message: 'Project by that ID not found' });
            }
            res.status(200).json({ message: `Project ${req.params.id} has been edited` });
        })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then((response) => {
            if (response === 0) {
                res.status(404).json({ message: 'Project by that ID not found' });
            }
            res.status(200).json({ message: `Project ${req.params.id} has been deleted` });
        })
})



module.exports = router;