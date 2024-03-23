import express from 'express';
//import blogInstance from '../models/publishSchema.js';

import blogList from '../models/publishSchema.js';
const publishRouter = express.Router()
publishRouter.use(express.json())

publishRouter.post('/', async(req, res) => {
    try {
        const request = req.body.body
    console.log('request from the frontend is', request)
    const {id,title, imageUrl, author, text, languageUsed} = request 
        console.log(request.id, title, imageUrl, author)
    const blog = new blogList({id : id, title : title, imageUrl : imageUrl, author : author, text : text, languageUsed : languageUsed})
    console.log('blog', blog)
    
    await blog.save()
    return res.status(200).json({status:200, message: 'blog successfully added to the db'})
    }

    catch(err) {
        return res.status(400).json({status : 400, message : err})
    }
})




export default publishRouter