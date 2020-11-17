const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// variables para la db
const db = require("../node-js-jwt-auth/models");

// para produccion usar solo sync() , e insertar manualmente 
db.sequelize.sync();

// para pruebas se puede insertar manualmente
/*
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and Resync Db");
    initial();
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create({
        id: 2,
        name: "moderator"
    });
    Role.create({
        id: 3,
        name: "admin"
    });
};
*/

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
// parse request of content-type - application/json
app.use(bodyParser.json());
//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome to DajDev Jwt-Heroku Application." });
});
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//set port, listen for request 
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});