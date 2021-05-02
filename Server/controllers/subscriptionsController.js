const express =  require('express');
const appRouter = express.Router();
const subscriptionsBL = require('../models/subscriptionBL');

appRouter.route('/')
         .get(async function (req,resp)
         {
            let allSubscriptions = await subscriptionsBL.getAllSubscriptions();
            return resp.json(allSubscriptions);
         });



appRouter.route('/:id')
         .get(async function (req,resp)
         {  
            let id = req.params.id;
            let Sub = await subscriptionsBL.getSub(id);

            return resp.json(Sub);
         });

appRouter.route('/Movieid/:id')
         .get(async function (req,resp)
         {   
            let id = req.params.id;
            let Sub = await subscriptionsBL.getSubByMovie(id);
            return resp.json(Sub);
         });

appRouter.route('/Memberid/:id')
         .get(async function (req,resp)
         {   
            let id = req.params.id;
            let Sub = await subscriptionsBL.getSubByMember(id);
            return resp.json(Sub);
         });
appRouter.route('/:id')
         .put(async function(req,resp)
         {
             let obj = req.body;
             let id = req.params.id;
     
             let result = await subscriptionsBL.updateSub(id,obj);
             return resp.json(result);
         })


appRouter.route('/:id')
         .delete(async function (req,resp)
         {
            let id =  req.params.id;
            
            let result = await subscriptionsBL.deleteSub(id);
            return resp.json(result);

         });

appRouter.route('/ByMemberid/:id')
         .delete(async function (req,resp)
         {  console.log('insideDeleter by member') 
            let Memberid =  req.params.id;
            
            let result = await subscriptionsBL.deleteSubByMember(Memberid);
            return resp.json(result);

         });

appRouter.route('/')
         .post(async function(req,resp)
         {
             let NewSub = req.body;
             let result = await subscriptionsBL.addSub(NewSub);
             return resp.json(result);
         })


module.exports = appRouter;
