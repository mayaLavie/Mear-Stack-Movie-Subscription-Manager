const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const MemberSchema = new appSchema(
        {   
            Name : String,
            Email : String,
            City : String,
            
        });


module.exports = mongoose.model('members',MemberSchema)  

