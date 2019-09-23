const mongoose = require('mongoose'),
      Cake = mongoose.model('Cake')
;

module.exports = {
    allCakes: function(req, res) {
        Cake.find({}, function(err, cakes) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(cakes);
            }
        });
    },
    getCake: function(req, res) {
        Cake.findOne({_id: req.params.id}, function(err, cake){
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(cake);
            }
        });
    },
    createCake: function(req, res) {
        console.log("in the cakes post route", req.body);
        Cake.create(req.body, function(err, cake) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Cake created successfully", cake: cake});
            }
        })
    },
    deleteCake: function(req, res) {
        Cake.remove({_id: req.params.id}, function(err) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                console.log("Cake deleted successfully");
                res.json({message: "Cake deleted successfully"});
            }
        });
    }
};
