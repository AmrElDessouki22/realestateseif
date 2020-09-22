const express = require('express')
const model = require('../DB/Model')
const app = new express.Router()
app.post('/additem', async (req,res) =>{

    const addnewitem = await model(req.body)
    await addnewitem.save()
    
    res.status(201).send('DONE')
})
app.get('/getitems', async (req,res) =>{
    const addnewitem = await model.find({})
    res.status(200).send(addnewitem)
})
module.exports = app




