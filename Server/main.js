
const express =  require('express');
var cors = require('cors');
const bodyParser = require('body-parser');


let app = express();
app.use(cors());

require('./configs/database')

app.use(bodyParser.urlencoded({extended : true}))
    .use(bodyParser.json());

const usersController = require('./controllers/usersController ')
app.use('/api/users' , usersController);

const moviesController = require('./controllers/moviesController')
app.use('/api/movies' ,moviesController);

const membersController = require('./controllers/membersController')
app.use('/api/members' , membersController);

const subscriptionsController = require('./controllers/subscriptionsController')
app.use('/api/subscriptions', subscriptionsController );

app.listen(8000);


console.log("Server is running...");