const express = require('express');
const router = express.Router();
const User = require("../models/user")
const Comment = require("../models/comment")


router.get("/", (req, res) => {
    Comment.find()
    .then(comment =>{
        res.json({msg: "Show comment", comment: comment})
    })
    .catch((err) => res.json({ msg: err }))
})


router.post("/comment", (req, res)=>{

    var createComment = {
        text: req.body.text
    }

    Comment.create(createComment)
    .then((comment=>{
        res.json({msg: "successfully comment", comment: comment})
    }))
    .catch(err => res.json({msg: err}))
})







module.exports = router;