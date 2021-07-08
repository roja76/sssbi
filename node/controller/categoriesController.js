const { resume } = require('../config/config');
var categoryModal = require('../model/categoryModal');
var Obj={};


Obj.getAll =(req,res)=>{
    categoryModal.getAll((result)=>{
        res.send(result);
    })
}
Obj.addCategory = (req,res)=>{
    let input=req.body;
    categoryModal.addCategory(input,(result)=>{
        res.send(result);
    })
}

Obj.updateCategory = (req,res)=>{
    let input = req.body;
    categoryModal.updateCategory(input,(result)=>{
        if (result.data.affectedRows == 0) {
            res.send({ "message": 'Unable to update', "data": result.data });
          } else {
            res.send(result);
          }
    })
}
  
Obj.deleteCategory = (req,res)=>{
    let input = req.body;
    categoryModal.deleteCategory(input,(result)=>{
        if (result.data.affectedRows == 0) {
            res.send({ "message": 'Unable to update', "data": result.data });
          } else {
            res.send(result);
          }
    })
}

module.exports=Obj;