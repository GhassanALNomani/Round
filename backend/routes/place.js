const express = require("express");
const router = express.Router();
const Places = require("../models/places")
const User = require("../models/user");


//Get all Places
router.get("/", (req, res) => {
    Places.find().then(result => {
        res.json({ result })
    })
})


//Get one place
router.get("/:placeId", (req, res) => {
    let placeId = req.params.placeId;
    Places.findById(placeId).then(pros => {
        res.json({ pros });
    })
        .catch(err => res.json({ msg: err }))
})



module.exports = router;