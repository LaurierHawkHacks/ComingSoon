/**
 * 
 * Unused for now.
 * 
 */

const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/var.env" });

const mcApiKey = process.env.MAILCHIMP_APIKEY;
const listId = process.env.LIST_ID;
const app = express();

const mailchimp = new Mailchimp(mcApiKey);

app.get("/api/memberAdd", (req, res) => {

    mailchimp.post(`/lists/${listId}/members`, {
        email_address: req.query.email,
        status: "subscribed"
    }).then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));

});

const port = process.env.PORT || 9001;
app.listen(port);
console.log("running server");