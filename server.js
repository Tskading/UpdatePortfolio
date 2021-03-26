const express = require("express");
const { restart } = require("nodemon");



const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function (req, res) {
       res.sendFile(path.join(__dirname, "./cliennpm /index.html"))
  })
}
// Add routes, both API and view

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});