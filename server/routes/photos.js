var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect("mongodb+srv://dbTests:dbTests@cluster0-sihub.gcp.mongodb.net/test?retryWrites=true&w=majority");

var photoSchema = mongoose.Schema({
  url: String,
  date_added: {type: Date, default: Date.now()},
  rating: {type: Number, min: 0, max: 5, default: 0},
  name: {type: String, required: false}
});

var Photo = mongoose.model("Photo", photoSchema);

// returns the database of photos
router.get('/', (req, res) => {
  Photo.find((err, response) => {
    res.json(response);
  });
});

module.exports = router;

