
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.use(express.json()); 


app.use('/auth', require('./routes/auth'));
app.use('/movies', require('./routes/movies'));
app.use('/theatres', require('./routes/theatres'));
app.use('/bookings', require('./routes/bookings'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
