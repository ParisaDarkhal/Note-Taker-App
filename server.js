// import npm packages we need
const express = require("express");
const path = require("path");
const fs = require("fs");

// initialize app
const app = express();
const PORT = process.env.PORT || 3001;

// GET request
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
//OR
app.use(express.static(path.join(__dirname, "public")));

// get for notes.html file
app.get("/notes", (req, res) => {
  //here i need to get data from db and put in notes.html

  //here i send notes.html for client
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// get for /api/notes
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// make listening port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
