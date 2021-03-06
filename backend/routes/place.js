const express = require("express");
const Place = require("../models/places");
const router = express.Router();

const User = require("../models/user");


//Get all Places
router.get("/", (req, res) => {
  Place.find()
    .populate("comments")
    .populate("user")
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => res.json({ msg: err }));
});




//Get one place
router.get("/:placeId", (req, res) => {
  let placeId = req.params.placeId;
  Place.findById(placeId)
    .populate("comments")
    .populate("user")
    .then((pros) => {
      res.json({ pros });
    })
    .catch((err) => res.json({ msg: err }));
});


// Add a place
router.post("/create", (req, res) => {
  // need to be checked

  var addPlace = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    location: req.body.location,
    date: req.body.date,
    workingHours: req.body.workingHours,
  };

  Place.create(addPlace)
    .then((place) => {
      res.json({ msg: "successfully place added" });
    })
    .catch((err) => res.json({ msg: err }));
});


//Rate place
router.post("/review", (req, res) => {
  const { userId, score, placeId, userName } = req.body
  Places.findById(placeId).then(place => {
    let result = place.reviews.find(ele => ele.userId == userId)
    if (!result) {
      const review = {
        userId, score, userName
      }

      Places.findByIdAndUpdate(placeId, { $push: { reviews: review } })
        .then(res => {
          res.send('added review')
        })
    } else {
      res.send('Error! you already reviewed')
    }
  })
})


//delete
router.delete("/:placeId", (req, res) => {
  let placeId = req.params.placeId;

  Place.findByIdAndDelete(placeId)

    .then((res) => {
      console.log("Place has been deleted", placeId); // make it alert
    })
    .catch((err) => res.json({ msg: err }));
});


//edit
router.put("/:placeId", (req, res) => {
  let placeId = req.params.placeId;

  let updatePlace = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    location: req.body.location,
    date: req.body.date,
    workingHours: req.body.workingHours,
  };

  Place.findByIdAndUpdate(placeId, updatePlace)
    .then((res) => {
      console.log("Place has been updated :", res);
    })
    .catch((err) => res.json({ msg: err }));
});


module.exports = router;