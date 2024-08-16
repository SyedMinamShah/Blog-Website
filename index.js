import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app= express();
const port =3000;
var i=1;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs",{title:"Create"});
});

app.get("/about", (req, res) => {
    res.render("about.ejs",{title:"About"});
});
app.get("/pages", (req, res) => {
    res.render("pages.ejs",{title:"Pages",
    pages:pages
    });
});
app.post("/",(req, res) => {
    const blog = {
     date: new Date(),   
     id: i++,
     title: req.body.title,
     content: req.body.content,};
    pages.push(blog);
    res.render("index.ejs",{title:"Create"});
});
app.delete("/pages/:id",(req, res) => {
    const searchIndex=pages.findIndex(page => page.id !== parseInt(req.params.id));
    pages.splice(searchIndex,1);
    
    res.render("pages.ejs",{title:"Pages",
        pages:pages});
});

app.listen(port,()=>{
    console.log(`API is running at http://localhost:${port}`);
});

var pages=[];

