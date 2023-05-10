// import npm packages we need
const express = require("express");
const path = require("path");
const fs = require("fs/promises");
const bodyParser = require("body-parser");
let id = 1;

// initialize app
const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

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
app.get("/api/notes", async (req, res) => {
  try {
    const data = await fs.readFile("./db/db.json");
    res.send(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
});

// create new post
app.post("/api/notes", async (req, res) => {
  const newNote = { title: req.body.title, text: req.body.text, id: id++ };

  try {
    const jsonFile = await fs.readFile("./db/db.json");
    let allNotes = JSON.parse(jsonFile);
    allNotes.push(newNote);
    await fs.writeFile("./db/db.json", JSON.stringify(allNotes));
    res.json(allNotes);
  } catch (error) {
    console.log(error);
  }
});

// delete a post
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const jsonFile = await fs.readFile("./db/db.json");
    let allNotes = JSON.parse(jsonFile);
    const objWithId = allNotes.findIndex((obj) => obj.id === id);
    if (objWithId > -1) {
      allNotes.splice(objWithId, 1);
    }
    await fs.writeFile("./db/db.json", JSON.stringify(allNotes));
    res.json(allNotes);
  } catch (error) {
    console.log(error);
  }
});

// make listening port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
