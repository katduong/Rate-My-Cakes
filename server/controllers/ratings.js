const mongoose = require('mongoose'),
      Rating = mongoose.model('Rating'),
      Cake = mongoose.model('Cake')
;

module.exports = {
    createRating: function(req, res) {
        var id = req.body._id;
        delete req.body._id;
        Rating.create(req.body, function(err, rating) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                Cake.findOneAndUpdate({_id: id}, {$push: {ratings: rating}}, {new:true}, function(err, cake) {
                    if (err) {
                        res.json({message: "Error", error: err});
                    }
                    else {
                        res.json({message: "Rating created successfully", cake: cake});
                    }
                })
            }
        })
    }
};
