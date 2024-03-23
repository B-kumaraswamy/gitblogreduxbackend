import express from 'express'
import blogList from '../models/publishSchema.js'
const fullBlogRouter = express.Router()
fullBlogRouter.use(express.json())

fullBlogRouter.get('/:id', async(req, res) => {
   try {
    const {id} = req.params
   
    console.log('request in the full blog', id)
   const displayBlog =  await blogList.findOne({id : id})

    return res.status(200).json({status : 200, result : displayBlog})
   }

   catch(err) {
    return res.status(404).json({status : 404, result : err})
   }
})

export default fullBlogRouter