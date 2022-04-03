const express = require("express");
const messages = require("../services/MessageService");
const msg = new messages();

const router = express.Router();

router.get("/", async (req, res) => {
    let rz = await msg.getMessages();
    console.log(rz);
    res.status(200).send("Messages results");
});

router.get("/:id", (req, res) => {
    res.status(200).send("Message result");
});

router.post("/", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Customer results");
});

router.put("/:id", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Customer results");
});

router.delete("/:id", (req, res) => {
    console.log('body:', req.body);
    res.status(200).send("Customer results");
});

module.exports = router;