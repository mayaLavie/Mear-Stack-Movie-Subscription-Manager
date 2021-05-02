const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const MovieSchema = new appSchema(
        {
            Name : String,
            YearPremiered : String,
            Genres : [String],
            ImageUrl : String
        });


module.exports = mongoose.model('movies',MovieSchema)  

