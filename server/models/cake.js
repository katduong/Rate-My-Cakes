const mongoose = require("mongoose"),
    RatingSchema = require("./rating.js")
;

var CakeSchema = new mongoose.Schema({
    baker: { type: String },
    imageUrl: { type: String },
    ratings: [RatingSchema],
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);
var Cake = mongoose.model('Cake');
mongoose.Promise = global.Promise;
