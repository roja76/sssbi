var dbConn = require("../config/config");
var Obj = {};

Obj.getAll = (result)=>{
    dbConn.query("select * from categories" , (err,res)=>{
        if(err){
            console.log("error while fetching",err);
            result({message: "sqlError", data:err});
        }
        else {
         result({message:"success", data:res})
        }
    })

}
Obj.addCategory = (input,result)=>{
    dbConn.query(`insert into categories (name) values('${input.name}')` , (err,res)=>{
        if(err){
            console.log("error while inserting data",err);
            result({message:"sql Error", data:err})
        }else{
            result({message:"success", data:res})
        }
    })
}

Obj.updateCategory = (input,result)=>{
    dbConn.query(`update  categories set name = '${input.name}' where id=${input.id}`,(err,res)=>{
        if(err){
            console.log("Error while updating", err);
            result({message:"sql Error", data:err})
        }else{
            result({message:"success",data:res})
        }
    })
}

Obj.deleteCategory = (input,result)=>{
    dbConn.query(`DELETE FROM categories WHERE id = ${input.id}`,(err,res)=>{
        if(err){
            console.log("error while deleting",err);
            result({message:"sql error", data:err})
        }else{
            result({message:"success",data:res})
        }
    })
}

module.exports=Obj;