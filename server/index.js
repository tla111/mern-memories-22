const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PostMessageModel = require("./models/postMessage.js");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://tla2020:Learn2019@cluster0.hnp2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.get("/posts", async (req, res) => {
    try {
        const postMessages = await PostMessageModel.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

app.post("/posts", async (req, res) => {
    const post = req.body;

    const newPost = new PostMessageModel(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

app.patch("/posts/:id", async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id");
    }

    const updatedPost = await PostMessageModel.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
});

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post with that id");
    }

    await PostMessageModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" });
});

app.patch("/posts/:id/likePost", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post with that id");
    }

    const post = await PostMessageModel.findById(id);

    const updatedPost = await PostMessageModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
});

app.post("/user/signin", async (req, res) => {

});

app.post("/user/signup", async (req, res) => {

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
