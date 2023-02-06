const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
require("dotenv").config()

app.use(bodyParser.json());
app.use(cors())
// IMPORT ROUTES
const sendMail = require("./route");

// HANDLE ROUTES
app.use("/api",sendMail)



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})