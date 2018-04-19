// REQUIRES
var express = require('express');
var mongoose = require('mongoose');

// VARIABLES INITIALIZATION
var app = express();

// DB connections
mongoose.connection.openUri('mongodb://localhost:27017/HospitalDB', (err, res) => {
    if (err) throw err;
    console.log('DB \x1b[32m%s\x1b[0m', '- ONLINE');
});

// ROUTES
app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        message: 'Request executed correctly'
    })
});

// LISTEN  REQUESTS, any port can be used!
app.listen(3000, () => {
    console.log('Express server running on port 3000 \x1b[32m%s\x1b[0m', '- ONLINE');
});