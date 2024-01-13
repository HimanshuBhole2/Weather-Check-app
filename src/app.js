if(process.env.NODE_ENV !="production"){
    require('dotenv').config()
    }

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { stat } = require('fs');
const app = express();
const port = 8000;
const templete = path.join(__dirname,'../templates/view');
const partial_path = path.join(__dirname,'../templates/partials');
const static_path = path.join(__dirname,'../public');
const API_KEY = process.env.API_KEY;

app.set("view setEngine",'hbs' )
app.set('views',templete)
hbs.registerPartials(partial_path)
app.use(express.static(static_path));

app.get("/",(req,res)=>{
    console.log(process.env.API_KEY);
    res.render('index.hbs')
})

app.get("/weather",(req,res)=>{
    const data = {API_KEY:API_KEY};
    res.render('weather.hbs',data);
});
app.get("/about",(req,res)=>{
    res.render("about.hbs")
});
app.get('*',(req,res)=>{
    res.render('404.hbs',{
        errMsg: "OOPs! Page Not Found."
    });
})
app.listen(port,()=>{
    console.log('Our Site is Working Fine');
})