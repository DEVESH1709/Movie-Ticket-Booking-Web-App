const express = require('express');
const Booking = require('../models/Booking');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();


router.use(authenticateToken);


router.get('/', async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id })
    .populate('movie').populate('theatre');
  res.json(bookings);
});

router.post('/', async (req, res) => {
  try {
    const booking = new Booking({
      user: req.user.id,
      movie: req.body.movie,
      theatre: req.body.theatre,
      seats: req.body.seats
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found or unauthorized' });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!booking) return res.status(404).json({ message: 'Booking not found or unauthorized' });
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
