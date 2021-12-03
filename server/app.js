const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("./config/keys")
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require("./Routes/auth");
const analyticsRoutes = require("./Routes/analytics");
const categoryRoutes = require("./Routes/category");
const orderRoutes = require("./Routes/order");
const positionRoutes = require("./Routes/position");
const app = express();

mongoose.connect(config.mongoUrl)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err.message))

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));

app.use('/uploads', express.static('uploads'));
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
const a = ' sad'
module.exports = app;
