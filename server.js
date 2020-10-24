const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http:localhost:4200"
}

app.use(cors(corsOptions))
// parse request of content-type - application/json
app.use(bodyParser.json());
//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome to DajDev Application." });
});

//set port, listen for request 
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
})