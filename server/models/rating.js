var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    rating: { type: Number },
    comment: { type: String },
}, {timestamps: true});

mongoose.model("Rating", RatingSchema);
var Rating = mongoose.model('Rating');
mongoose.Promise = global.Promise;

module.exports = RatingSchema;
