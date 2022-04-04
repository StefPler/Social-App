const express = require("express");
const Chats = require("../services/ChatService");
const chats = new Chats();

const router = express.Router();

router.get("/", async (req, res) => {
    let rz = await chats.getChats();
    console.log(rz);
    res.status(200).send("Chat results");
});

router.get("/:id", (req, res) => {
    res.status(200).send("Chat result");
});

router.post("/", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Chat results");
});

router.put("/:id", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Chat results");
});

router.delete("/:id", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Chat results");
});

module.exports = router;