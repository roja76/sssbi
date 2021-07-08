var dbConn = require("../config/config");
var Obj = {};

Obj.getAll = (result)=>{
    dbConn.query("select p.*,c.name from posts p join categories c on p.categories_id = c.id" , (err,res)=>{
        if(err){
            console.log("error while fetching",err);
            result({message: "sqlError", data:err});
        }
        else {
         result({message:"success", data:res})
        }
    })

}
// Obj.addPost = (input,result)=>{
//     dbConn.query(`insert into posts (image,title,description,posted_date,Categories_id) values('${input.image}','${input.title}','${input.description}','${input.posted_date}',${input.categories_id})` , (err,res)=>{
//         if(err){
//             console.log("error while inserting data",err);
//             result({message:"sql Error", data:err})
//         }else{
//             result({message:"success", data:res})
//         }
//     })
// }

Obj.updatePost = (input,imgPathUrl,result)=>{
    dbConn.query(`update  posts set image = '${imgPathUrl}', title='${input.title}',description='${input.description}',categories_id=${input.category} where id=${input.id}`,(err,res)=>{
        if(err){
            console.log("Error while updating", err);
            result({message:"sql Error", data:err})
        }else{
            result({message:"success",data:res})
        }
    })
}

Obj.deletePost = (input,result)=>{
    dbConn.query(`DELETE FROM posts WHERE id = ${input.id}`,(err,res)=>{
        if(err){
            console.log("error while deleting",err);
            result({message:"sql error", data:err})
        }else{
            result({message:"success",data:res})
        }
    })
}

Obj.savedata = (input,imgPathUrl,result)=>{
    dbConn.query(`insert into posts (image,title,description,posted_date,Categories_id) values('${imgPathUrl}','${input.title}','${input.description}',CURRENT_TIMESTAMP(),${input.category})` , (err,res)=>{
        if(err){
            console.log("error while inserting data",err);
            result({message:"sql Error", data:err})
        }else{
            result({message:"success", data:res})
        }
    })
}

module.exports=Obj;