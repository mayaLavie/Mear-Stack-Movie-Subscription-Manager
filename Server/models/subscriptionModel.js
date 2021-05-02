const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const SubscriptionSchema = new appSchema(
        {
            MovieID : String,
            MemberID : String,
            Date : String
        });


module.exports = mongoose.model('subscriptions',SubscriptionSchema)  

