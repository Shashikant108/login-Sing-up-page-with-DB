'Access-Control-Allomyrouteds'
const express  = require('express');
const cors = require('cors');
const route = express();
require('dotenv').config();
const myrouteds = require('./routes/myroute');
require('./database/connection');
const port = process.env.port || 6800

route.use(express.json());
route.use(cors());
route.use(myrouteds);


route.listen(port,()=>{
    console.log(`port running ${port}`);
})


