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
router.get('/', (req, res) => {
  Customer.find((err, response) => {
    res.json(response);
  });
});

// create user post request
router.post('/', (req, res) => {
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

router.get('/delete/:id', (req, res) => {
  Customer.findByIdAndRemove(req.params.id, (err, response) => {});
  res.redirect('back');
}); 


module.exports = router;
