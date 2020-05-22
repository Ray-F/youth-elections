var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect("mongodb+srv://dbTests:dbTests@cluster0-sihub.gcp.mongodb.net/test?retryWrites=true&w=majority");

var customerSchema = mongoose.Schema({
  name: String,
  phone: Number,
  address: String
});

var Customer = mongoose.model("Customer", customerSchema);

// get user request
router.get('/users', (req, res) => {
  Customer.find((err, response) => {
    res.json(response);
  });
});

// create user post request
router.post('/users', (req, res) => {
  var info = req.body;

  if (!info.name || !info.address || !info.phone) { res.redirect('back'); }
  if (typeof(info.phone) !== Number) { res.redirect('back'); } // dont want any junk written into the db now don't we

  var newCustomer = new Customer({
    name: info.name,
    address: info.address,
    phone: info.phone
  });

  newCustomer.save();

  res.redirect('back');

});

router.get('/users/delete/:id', (req, res) => {
  Customer.findByIdAndRemove(req.params.id, (err, response) => {});
  res.redirect('back');
}); 


/* EXPRESS home page. */
router.get('/', (req, res) => {
  res.send(`
  <h1>Express API</h1>
  <p>For some reason, you've managed to end up on this page.</p>
  <p>You can access the back-end from here, by making API requests</p>
  <p>Don't know how? This page probably isn't for you then!</p>
  
  <style>* {text-align: center}</style>
  `);
});

module.exports = router;
