const express = require("express");
const path = require("path");

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});