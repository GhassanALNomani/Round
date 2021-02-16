const express = require('express');
const router = express.Router();
const User = require("../models/user")
const Place = require("../models/places")
const Comment = require("../models/comment")


router.get("/", (req, res) => {
    Comment.find()
        // .populate("comments")
        .populate("user")
        .then(comment => {
            res.json({ msg: "Show comment", comment: comment })
        })
        .catch((err) => res.json({ msg: err }))
})

//:id
router.post("/:placeId/:userId", (req, res) => {

    var createComment = {
        text: req.body.text,
        user: req.params.userId
    }
    Comment.create(createComment)
        .then((comment => {
            Place.findByIdAndUpdate(req.params.placeId, { $push: { comments: comment } }, { new: true })
                .then(place => {
                    res.json({ msg: "successfully comment", place: place })
                })

        }))
        .catch(err => res.json({ msg: err }))
})




module.exports = router;