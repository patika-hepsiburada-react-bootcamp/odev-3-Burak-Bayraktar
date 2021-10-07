const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
router.use(express.json())
router.use(require('cors'))

router.get('/votes', async (req, res) => {
    try {
        const votes = await Vote.find();
        res.json(votes)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/votes', async (req,res) => {
    console.log(req.body)
    const vote = new Vote({
        vote: req.body.vote,
    })

    try {
        const savedVote = await vote.save();
        res.json(savedVote)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;