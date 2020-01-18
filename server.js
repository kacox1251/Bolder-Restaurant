// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
// =============================================================
const tables = [];
const waitlist = [];

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});


app.get("/api/reserve", function(req, res) {
  return res.json(tables);
});
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/reserve", function(req, res) {

  const newReservation = req.body;

  console.log(newReservation);
  if (tables.length <= 4) {
    tables.push(newReservation);
    res.json(true);
  } else {
    waitlist.push(newReservation);
    res.json(false)
  }
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
