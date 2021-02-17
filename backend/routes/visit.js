const express = require("express");
const Place = require("../models/places");
const router = express.Router();
const User = require("../models/user");
router.put("/", (req, res) => {
    let placeId = req.body.placeId
    let userId = req.body.userId
    console.log(placeId)
    User.findByIdAndUpdate(userId, { $addToSet: { placesToVisit: placeId } }, { new: true })
        .then(user => {
            res.json({ msg: "place added to visit list", placesToVisit: user.placesToVisit })
        })
})
router.get('/:id', (req, res) => {
    let id = req.params.id
    User.findById(id).populate('placesToVisit')
        .then(user => res.json({ placesToVisit: user.placesToVisit }))
})
router.delete('/:id/:placeId', (req, res) => {
    let id = req.params.id
    let placeId = req.params.placeId
    console.log(placeId)
    User.findByIdAndUpdate(id, { $pull: { placesToVisit: placeId } })
        .then(user => res.json({ placesToVisit: user.placesToVisit }))
})


module.exports = router;