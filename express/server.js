const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const recycleRouter = require('./routes/recycleRouter');

const app = express();

connectDB();

app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use('/itemsIntake',recycleRouter);

app.listen(PORT, () => console.log(`server started on port${PORT}`));

module.exports = app;