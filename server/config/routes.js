const mongoose = require('mongoose'),
      // Task = mongoose.model('Task'),
      bodyParser = require('body-parser'),
      cakes = require('../controllers/cakes.js'),
      ratings = require('../controllers/ratings.js')
;
module.exports = function(app){
    app.get("/cakes", function(req, res) {
        cakes.allCakes(req,res);
    });
    app.get("/cakes/:id", function(req, res) {
        cakes.getCake(req,res);
    });
    app.post("/cakes", function(req, res) {
        cakes.createCake(req, res);
    });
    app.post("/ratings", function(req, res) {
        ratings.createRating(req, res);
    });
    app.delete("/cakes/:id", function(req, res) {
        cakes.deleteCake(req, res);
    });
}
