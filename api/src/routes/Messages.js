const express = require("express");
const messages = require("../services/MessageService");
const msg = new messages();

const router = express.Router();

router.get("/", async (req, res) => {
    let messages = await msg.getMessages();
    res.status(200).send(messages);
});

router.get("/:id", async (req, res) => {
    const data = {
        id: req.params.id
    };
    let message = await msg.getMessage(data);
    res.status(200).send(message);
});

router.post("/", async (req, res) => {
    console.log('body:', req.body);
    const message = await msg.createMessage(req.body);
    res.status(200).send(message);
});

router.put("/:id", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Message results");
});

router.delete("/:id", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Message results");
});

module.exports = router;