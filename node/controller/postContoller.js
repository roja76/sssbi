const { resume } = require('../config/config');
var postmodel = require('../model/postModal');
var Obj={};


Obj.getAll =(req,res)=>{
    postmodel.getAll((result)=>{
        res.send(result);
    })
}
// Obj.addPost = (req,res)=>{
//     let input=req.body;
//     postmodel.addPost(input,(result)=>{
//         res.send(result);
//     })
// }

Obj.updatePost = (req,res)=>{
    input = JSON.parse(req.body.input_data);
    console.log(input);
    imagefile = req.files;
    console.log(imagefile);
    let imgPathUrl = input.image;
    console.log(imgPathUrl + "saveprofile");
    if (imagefile.uploads) {
      let imgPath = imagefile.uploads.path;
      console.log(imgPath);
      imgArr = imgPath.split("\\");
      imgPathUrl = imgArr[imgArr.length - 1];
      imgPathUrl = imgPath;
      imgPathUrl = imgPathUrl.replace("dist\\assets\\post-imgs\\", "");
      console.log(imgPathUrl + "img");
    }
    // let input = req.body;
        postmodel.updatePost(input,imgPathUrl,(result)=>{
        if (result.data.affectedRows == 0) {
            res.send({ "message": 'Unable to update', "data": result.data });
          } else {
            res.send(result);
          }
    })
}
  
Obj.deletePost = (req,res)=>{
    let input = req.body;
    postmodel.deletePost(input,(result)=>{
        if (result.data.affectedRows == 0) {
            res.send({ "message": 'Unable to update', "data": result.data });
          } else {
            res.send(result);
          }
    })
}

  


Obj.savedata = function (req, res, next) {

    input = JSON.parse(req.body.input_data);
    console.log(input);
    imagefile = req.files;
    console.log(imagefile);
    let imgPathUrl = input.image;
    console.log(imgPathUrl + "saveprofile");
    if (imagefile.uploads) {
      let imgPath = imagefile.uploads.path;
      console.log(imgPath);
      imgArr = imgPath.split("\\");
      imgPathUrl = imgArr[imgArr.length - 1];
      imgPathUrl = imgPath;
      imgPathUrl = imgPathUrl.replace("dist\\assets\\post-imgs\\", "");
      console.log(imgPathUrl + "img");
    }

    
    postmodel.savedata(input,imgPathUrl,(result)=>{
        res.send(result);
    })
  
    // var Query = `insert into posts (image,title,description,posted_date,Categories_id) values('${imgPathUrl}','${input.title}','${input.description}','${input.posted_date}',${input.categories_id})`;
    // console.log(Query);
    // con.query(Query, function (err, result, fields) {
    //   if (err) {
    //     console.log("Sql error");
    //   } else {
    //     res.send({
    //       code: 200,
    //       message: "success",
    //       data: result,
    //     });
    //   }
    // });
  };

module.exports=Obj;