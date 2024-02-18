const mongose = require('mongoose');
// const db = "mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/mydatabase";
mongose.connect(process.env.compass)
.then((d)=>{
    console.log("db connections ok");
})
.catch((err)=>{
    console.log(err);
})