const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const eventRouter = require('./routes/event');
const characterRouter = require('./routes/character');
const unionRouter = require('./routes/union');
const guildRouter = require('./routes/guild');
const probabilityRouter = require('./routes/probability');
const rankRouter = require('./routes/rank');
const noticeRouter = require('./routes/notice');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
app.use('/', indexRouter);
app.use('/character', characterRouter);
app.use('/event',eventRouter);
app.use('/union',unionRouter);
app.use('/guild',guildRouter);
app.use('/probability', probabilityRouter);
app.use('/rank', rankRouter);
app.use('/notice', noticeRouter);

// app.listen(3000, function() {
//     console.log("Server is running on port " + 3000);
// });

module.exports = app;
