const express = require('express')
const app = express()
const path = require('path')
require('./DB/init')
const client = require('./routes/clientview')
const static = path.join(__dirname,'/public')
app.use(express.static(static))
const view = path.join(__dirname,'/Template/Views')


app.set('view engine', 'hbs');
app.set('views',view)
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('index.hbs')
})
app.get('/adminpanel',(req,res)=>{
    res.render('adminpanel.hbs')
})
app.use(client)
app.listen(process.env.PORT || 3000)