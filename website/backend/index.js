const express = require("express")
const app = express();
const passport = require("passport")
const passportSetup = require("./config/passport-setup");

const port = 4000;

app.use(passport.initialize());

app.get("/auth/discord", passport.authenticate("discord", { permissions: 8 }));
app.get("/auth/discord/callback", passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect("https://discord.com/")
});

app.listen(port, () => console.log(`Server is running on port ${port}`))