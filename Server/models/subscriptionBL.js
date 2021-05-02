const mongoose = require('mongoose');
const express = require('express');
const Subscription = require('./subscriptionModel');

exports.getAllSubscriptions = function()
{
    return new Promise((resolve, reject) =>
    {
        Subscription.find({}, function(err,subData)
        {   console.log(subData);
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(subData);
            }
        });
    })
}
exports.getSub = function(id)
    {
        return new Promise((resolve, reject) =>
        {
            Subscription.findById(id, function(err,data)
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

exports.getSubByMovie = function(MovieID)
    {  
        return new Promise((resolve, reject) =>
        {
            Subscription.find({MovieID : MovieID}, function(err,data)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                  // let memberResult = data.map(item =>item.MemberID )
                    resolve(data)

                }
            })
        })
    }

exports.getSubByMember = function(MemberID)
    {  
        return new Promise((resolve, reject) =>
        {    console.log('inside get by member')
            Subscription.find({MemberID : MemberID}, function(err,data)
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

exports.updateSub = function(id,subData)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.findByIdAndUpdate(id,
            {
                MovieID : subData.MovieID,
                MemberID : subData.MemberID,
                Date : subData.Date
              

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



exports.addSub = function(data)
    {

        return new Promise((resolve, reject) =>
        {
            let NewSub = new Subscription({
             
                MovieID : data.MovieID,
                MemberID : data.MemberID,
                Date : data.Date
               
            });
            NewSub.save(function(err)
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


exports.deleteSub = function(id)
{
    return new Promise(  (resolve, reject) =>
    {
        Subscription.findByIdAndDelete(id,function(err)
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

exports.deleteSubByMember = function(MemberID)
{
    return new Promise(  (resolve, reject) =>
    {
        
        Subscription.deleteMany({MemberID : MemberID}, function(err,data)
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