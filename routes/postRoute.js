const express=require("express");
const router=express.Router();
const Post=require("../models/postModels");

router.route("/create").post((req,res) =>{

    const title=req.body.title;
    const content=req.body.content;
    const newPost= new Post({
        title,
        content
    })
    newPost.save();
})

router.route("/posts").get((req,res) =>{
    Post.find()
        .then(foundPosts =>res.json(foundPosts))
    
})

router.get("/post/:postId",async(req,res)=>{
    try{
        const requestedPostId=req.params.postId;
        console.log(requestedPostId);
        const post = await Post.findOne({_id:requestedPostId});
        console.log(post);
        res.send(post);
    } catch{
        res.status(404);
        res.send({error:"post doesn't exist"});
    }
    
})
    


module.exports=router;