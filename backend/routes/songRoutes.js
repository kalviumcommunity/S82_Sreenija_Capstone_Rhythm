const express = require("express");
const router = express.Router();
const Song = require("../model/Song");

// POST add song
router.post("/", async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.status(201).json(newSong);
});

// GET all songs
router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// PUT update song
router.put("/:id", async (req, res) => {
  const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSong);
});

module.exports = router;
