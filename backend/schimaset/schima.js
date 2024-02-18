const mongose= require('mongoose');

const myschimapattern= new mongose.Schema({
    email: {
        type: String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    pass:{
        type:String
    },
    profile:{
        type: String
    }

});

const mytype = new mongose.model("biodata", myschimapattern);
 module.exports=mytype