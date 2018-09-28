const express = require('express')
    , app = express()
    , server = require('http').Server(app);

const port = process.env.PORT || 8002;

app.use(express.static('./../'));

server.listen(port, function() {
    console.log('server started on  8002');
});
