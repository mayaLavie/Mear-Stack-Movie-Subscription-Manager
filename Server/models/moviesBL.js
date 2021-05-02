const mongoose = require('mongoose');
const express = require('express');
const Movie = require('../models/movieModel');

exports.getAllMovies = function()
{
    return new Promise((resolve, reject) =>
    {
        Movie.find({}, function(err,movieData)
        {   console.log(movieData);
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(movieData);
            }
        });
    })
}
exports.getMovie = function(id)
    {
        return new Promise((resolve, reject) =>
        {
            Movie.findById(id, function(err,data)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(data)
                }
            })
        })
    }


exports.updateMovie = function(id,movieData)
{
    return new Promise((resolve,reject) =>
    {
        Movie.findByIdAndUpdate(id,
            {
                Name : movieData.Name,
                YearPremiered : movieData.YearPremiered,
                Genres : movieData.Genres,
                ImageUrl : movieData.ImageUrl
             

            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated !')
                }
            })
           
    })
    
}



exports.addMovie = function(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            let NewMovie = new Movie({
                Name : data.Name,
                YearPremiered : data.YearPremiered,
                Genres : data.Genres,
                ImageUrl : data.ImageUrl
               
            });
            NewMovie.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Created!')
                }
            });
        });

    }


exports.deleteMovie = function(id)
{
    return new Promise(  (resolve, reject) =>
    {
        Movie.findByIdAndDelete(id,function(err)
        { 
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve ('deleted');
            }
        });
    })
}