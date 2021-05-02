const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const UserSchema = new appSchema(
        {
            FullName : String,
            UserName : String,
            Password : String
        });


module.exports = mongoose.model('users',UserSchema)  

