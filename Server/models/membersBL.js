const mongoose = require('mongoose');
const express = require('express');
const Member = require('./memberModel');

exports.getAllMembers = function()
{
    return new Promise((resolve, reject) =>
    {
        Member.find({}, function(err,memberData)
        {   console.log(memberData);
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(memberData);
            }
        });
    })
}
exports.getMember = function(id)
    {
        return new Promise((resolve, reject) =>
        {
            Member.findById(id, function(err,data)
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


exports.updateMember = function(id,memberData)
{
    return new Promise((resolve,reject) =>
    {
        Member.findByIdAndUpdate(id,
            {   
                Name : memberData.Name,
                Email : memberData.Email,
                City : memberData.City

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



exports.addMember = function(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            let NewMember = new Member({
                Name : data.Name,
                Email : data.Email,
                City : data.City
            });
            NewMember.save(function(err)
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


exports.deleteMember = function(id)
{
    return new Promise(  (resolve, reject) =>
    {
        Member.findByIdAndDelete(id,function(err)
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