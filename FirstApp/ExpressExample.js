const express  = require("express");

const app = express();

app.get('/', function (request, response) {
   response.send('Home page');
});

app.get("/news/:id", function (request, response) {
    response.send("id is - " + request.params.id);
});

app.listen(3001);