const express = require("express");
const router = express.Router();
const Class = require("../model/Class");

// POST new class
router.post("/", async (req, res) => {
  const newClass = new Class(req.body);
  await newClass.save();
  res.status(201).json(newClass);
});

// GET all classes
router.get("/", async (req, res) => {
  const classes = await Class.find().populate("teacher", "name email");
  res.json(classes);
});

// PUT update class
router.put("/:id", async (req, res) => {
  const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedClass);
});

module.exports = router;
