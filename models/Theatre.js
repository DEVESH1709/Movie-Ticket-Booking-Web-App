const mongoose = require('mongoose');

const TheatreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  seatingCapacity: Number
});

module.exports = mongoose.model('Theatre', TheatreSchema);
