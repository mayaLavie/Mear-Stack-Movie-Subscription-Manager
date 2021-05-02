const express =  require('express');
const appRouter = express.Router();
const moviesBL = require('../models/moviesBL');

appRouter.route('/')
         .get(async function (req,resp)
         {  
            let allMovies = await moviesBL.getAllMovies();           
            return resp.json(allMovies);
         });

appRouter.route('/:id')
         .get(async function (req,resp)
         {  console.log('inside get movie')
            let id = req.params.id;
            let Movie = await moviesBL.getMovie(id);

            return resp.json(Movie);
         });

appRouter.route('/:id')
         .put(async function(req,resp)
         {
             let obj = req.body;
             let id = req.params.id;
     
             let result = await moviesBL.updateMovie(id,obj);
             return resp.json(result);
         })

appRouter.route('/:id')
         .delete(async function (req,resp)
         {
            let id =  req.params.id;
            
            let result = await moviesBL.deleteMovie(id);
            return resp.json(result);

         });

appRouter.route('/')
         .post(async function(req,resp)
         {
             let NewMovie = req.body;
             let result = await moviesBL.addMovie(NewMovie);
             return resp.json(result);
         })

module.exports = appRouter;
