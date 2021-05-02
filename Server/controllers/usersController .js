require('dotenv').config()
const express =  require('express');
const appRouter = express.Router();
const usersBL = require('../models/usersBL');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');


appRouter.route('/' )
         .get(async function (req,resp)
         {
            let allUsers = await usersBL.getAllUsers();
            return resp.json(allUsers);
         });


appRouter.route('/:id')
         .get(async function (req,resp)
         {  
            let id = req.params.id;
            let User = await usersBL.getUser(id);

            return resp.json(User);
         });

appRouter.route('/:id')
         .put(async function(req,resp)
         {
             let obj = req.body;
             let id = req.params.id;
     
             let result = await usersBL.updateUser(id,obj);
             return resp.json(result);
         })


appRouter.route('/:id')
         .delete(async function (req,resp)
         {
            let id =  req.params.id;
            
            let result = await usersBL.deleteUser(id);
            return resp.json(result);

         });

appRouter.route('/')
         .post(async function(req,resp)
         { 
           
                  let NewUser = req.body;
                  let result = await usersBL.addUser(NewUser);
                  return resp.json(result);        
         });

appRouter.route('/login')
         .post(async function(req,resp)
         { 
            let allUsers = await usersBL.getAllUsers();
            let result =allUsers.find(user => user.UserName ==req.body.UserName);
            if(result){
                           if(result.Password ==req.body.Password){
                           /// return resp.json({status:true,note:"Successful login",name:result.FullName});
                           const user = result.FullName
                           console.log(user);
                           const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
                           return resp.send({'accessToken':accessToken,'user':user,'status':true})
                      }
                      else
                        {
                           return resp.send({'status':false,'note':"Password incorrect"})
                        }  
            }else{  
                  return resp.send({'status':false,'note':"User not found"})
               
                  } 
      });
 
    
appRouter.route('/authToken')
      .post( function(req,resp)
      {
        console.log("inside AuthToken");
         let token= req.body.accessToken
         
         jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
            if(err)
            {
              resp.send(false)
            } 
            else
            {
               resp.send(true)
            }
             
         }
         
         )
      
      
      })
 






module.exports = appRouter;
