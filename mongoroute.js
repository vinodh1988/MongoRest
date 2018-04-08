var express=require('express');
var route= express.Router();
var model=require('./model/model.js');


route.get('/all',function(request,response){
     model.find({},{_id:0},function(err,data){
         if(err)
           response.json({countries:[]});
         else
           response.json({countries:data});
     })
});

route.get('/all/:cname',function(request,response){
    
    model.find({country_name:request.params.cname},{_id:0},
        function(err,data){
        if(err)
          response.json({countries:[]});
        else
          response.json({countries:data});
    })
});

route.put('/change/:country',function(request,response){
     let country=request.params.country;
     model.update({country_name:country},{$set:request.body},
        function(error,data){
           if(error)
              response.send({update:"Not happened"});
           else
              response.send({update:"updated successfully"});
        });
});


module.exports=route;