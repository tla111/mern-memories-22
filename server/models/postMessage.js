const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessageModel = mongoose.model("posts", PostSchema);
module.exports = PostMessageModel;