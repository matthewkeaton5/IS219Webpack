const express = require("express");
const path = require("path");

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

