const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const message = require('./database/Message');
require("./database/config");

app.post('/send',async(req,resp)=>{
    let data = new message(req.body);
    let result = await data.save();
    resp.send(result);
})

app.listen(7000);