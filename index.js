const express = required ("express")
const app = express();

app.use(allBooks);
app.get("/books",(req,res)=>{
    return res.send("hello user");
});
app.get("/books/:name",(req,res) =>{
    console.log("books");
    return res.send({ bookName: req.Name });

});
function allbooks(req,res,next){
    console.log("fetching books");
    next();
}
app.listen(5000,()=>{
    console.log("listen the port on 5000")
});