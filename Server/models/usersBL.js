const mongoose = require('mongoose');
const express = require('express');
const User = require('./userModel');

exports.getAllUsers = function()
{
    return new Promise((resolve, reject) =>
    {
        User.find({}, function(err,userData)
        {   
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(userData);
            }
        });
    })
}


exports.getUser = function(id)
    {
        return new Promise((resolve, reject) =>
        {
            User.findById(id, function(err,data)
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


exports.updateUser = function(id,userData)
{
    return new Promise((resolve,reject) =>
    {
        User.findByIdAndUpdate(id,
            {
                FullName : userData.FullName,
                UserName : userData.UserName,
                Password : userData.Password
               
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



exports.addUser = function(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            
            let NewUser = new User({
                FullName : data.FullName,
                UserName : data.UserName,
                Password : data.Password
            });
            NewUser.save(function(err)
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


exports.deleteUser = function(id)
{
    return new Promise(  (resolve, reject) =>
    {
        User.findByIdAndDelete(id,function(err)
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

exports.IsAuthorized = function(data)
{
    return new Promise(  (resolve, reject) =>
    {
        let result = User.find({Username: data.UserName, password: data.Password}, function(err,userData)
        {   console.log('got here');
            if(result = null)
            {
                resolve(false);
            }
            else
            {
                resolve(true);
            }
        });
      
    }

    )
}