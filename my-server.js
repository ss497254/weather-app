const express = require('express')
const path = require('path')
const hbs = require('hbs')
const weather = require('./src/forecast')
const port = process.env.PORT || 3333
const app=express()
const viewspath=path.join(__dirname,"/templates/views")
const partialspath=path.join(__dirname,"/templates/partials")
const localpath=path.join(__dirname,"/public")

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)

app.use(express.static(localpath))

app.get('',(req,res)=>{
    res.render('home-page',
    {
        title:"Weather App",
        name:"Saurabh Singh"
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({error:"PLEASE ENTER ADDRESS"})
    }
    weather(req.query.search,(error,data)=>{
        if(error)
            return res.send({error})
        return res.send(data)
    })
})
app.get('/help',(req,res)=>{
    res.render('help',
    {
        title:"Help",
        content:'Use google to find any help. Don\'t ask me',
        name:"Saurabh Singh"
    })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error-404',
        name: 'Saurabh Singh',
        content:"Help article not found.",
    })
})
app.get('/about',(req,res)=>{
    res.render('about',
    {
        title:"About",
        name:"Saurabh Singh"
    })
})
app.get('*',(req,res)=>{
    res.render('error',
    {
        title:"Error-404",
        content:'Page not available. Try another page',
        name:"Saurabh Singh"
    })
})
app.listen(port,()=>{
    console.log("3333 pe chal raha hai jaake dekh");
})