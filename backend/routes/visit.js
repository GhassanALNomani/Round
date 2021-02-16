const express = require("express");
const Place = require("../models/places");
const router = express.Router();
const User = require("../models/user");

router.post("/tovisit", (req, res) => {

    let placeId = req.body.placeId
    let userId = req.body.userId
    

    User.findByIdAndUpdate(userId, { $addToSet: { placesToVisit: placeId } }, { new: true })
        .then(user => {
            res.json({ msg: "add to placesToVisit", placesToVisit: user.placesToVisit })

        })

})






module.exports = router;