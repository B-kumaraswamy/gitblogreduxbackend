import express from 'express'
import blogList from '../models/publishSchema.js'

const getBlogsRouter = express.Router()

getBlogsRouter.use(express.json())

getBlogsRouter.get('/', async(req, res) => {
    try {
        const allBlogs = await blogList.find({})

    return res.status(200).json({status : 200, result : allBlogs})
    }

    catch(err) {
        return res.status(404).json({status : 404, message : err})
    }
})

getBlogsRouter.get('/:blogid', async(req, res) => {
    try {
     const {blogid} = req.params
    
     console.log('request in the full blog', req)
    const displayBlog =  await blogList.findOne({_id : blogid})
 
     return res.status(200).json({status : 200, result : displayBlog})
    }
 
    catch(err) {
     return res.status(404).json({status : 404, result : err})
    }
 })

getBlogsRouter.get('/:id', async(req, res) => {
    try {
     const {id} = req.params
    
     console.log('request in the full blog', req)
    const displayBlog =  await blogList.findOne({id : id})
 
     return res.status(200).json({status : 200, result : displayBlog})
    }
 
    catch(err) {
     return res.status(404).json({status : 404, result : err})
    }
 })



export default getBlogsRouter