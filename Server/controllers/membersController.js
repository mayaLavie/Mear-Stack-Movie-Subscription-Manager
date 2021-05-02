const express =  require('express');
const appRouter = express.Router();
const membersBL = require('../models/membersBL');

appRouter.route('/')
         .get(async function (req,resp)
         {
            let allMembers = await membersBL.getAllMembers();
            return resp.json(allMembers);
         });

appRouter.route('/:id')
         .get(async function (req,resp)
         {  
            let id = req.params.id;
            let Member = await membersBL.getMember(id);

            return resp.json(Member);
         });

appRouter.route('/:id')
         .put(async function(req,resp)
         {
             let obj = req.body;
             let id = req.params.id;
     
             let result = await membersBL.updateMember(id,obj);
             return resp.json(result);
         })

appRouter.route('/:id')
         .delete(async function (req,resp)
         {
            let id =  req.params.id;
            
            let result = await membersBL.deleteMember(id);
            return resp.json(result);

         });

appRouter.route('/')
         .post(async function(req,resp)
         {
             let NewMember = req.body;
             let result = await membersBL.addMember(NewMember);
             return resp.json(result);
         })


module.exports = appRouter;
