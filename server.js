const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin-aysegul:user123@cluster0.inojc.mongodb.net/personalBlogDB",{useNewUrlParser: true, useUnifiedTopology: true});


app.use("/",require("./routes/postRoute"));


app.listen(3001,function(){
    console.log("server is running on 3001");
})