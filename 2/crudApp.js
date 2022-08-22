let users =[
    { name:"thana",age:27,major:"CSE",},
    { name:"thana",age:27,major:"CSE",},
    { name:"thana",age:27,major:"CSE",},
    { name:"thana",age:27,major:"CSE",},
    { name:"thana",age:27,major:"CSE",},
]
let posts =[
    { desc:"thana najem graduated from CSE department at ptuk in Palestine ",publishedDate:"22/8/2022",publisherName:"thana"},
    { desc:"thana najem graduated from CSE department at ptuk in Palestine ",publishedDate:"22/8/2022",publisherName:"thana"},
    { desc:"thana najem graduated from CSE department at ptuk in Palestine ",publishedDate:"22/8/2022",publisherName:"thana"},
    { desc:"thana najem graduated from CSE department at ptuk in Palestine ",publishedDate:"22/8/2022",publisherName:"thana"},
]
const express = require('express')
const store = require("store")
const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("homepage")
})
app.get("/getAllUser",(req,res)=>{
    console.log(store.get("users")); 
     if(store.get("users")!=null){
         res.json(store.get("users"))

     }
     else{
        res.json(users)
     }
})
app.get("/getUserReversed",(req,res)=>{
   console.log(store.get("users")); 
   let userss = store.get("users")
   if(userss!=null){
    res.json([...userss].reverse())
    
}
else{
    res.json([...users].reverse()) 
}
    // res.json([...users].reverse())
})
app.post("/addUser",(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    store.set("users",users)
    res.json(store.get("users"))
})


 
app.get("/getAllPosts",(req,res)=>{
    console.log(store.get("posts")); 
     if(store.get("posts")!=null){
         res.json(store.get("posts"))

     }
     else{
        res.json(posts)
     }
})
app.get("/getPostsReversed",(req,res)=>{
   console.log(store.get("posts")); 
   let postss = store.get("posts")
   if(postss!=null){
    res.json([...postss].reverse())
    
}
else{
    res.json([...postss].reverse()) 
}
    // res.json([...users].reverse())
})
app.post("/addPost",(req,res)=>{
    console.log(req.body)
    posts.push(req.body)
    store.set("posts",posts)
    res.json(store.get("posts"))
})
app.get("*",(req,res)=>{
    res.send("404 NotFound page")
})
app.listen(3000,()=>{
    console.log("server is running ...");
})
