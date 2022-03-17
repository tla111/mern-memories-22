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
    try {

    } catch (error) {

    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
