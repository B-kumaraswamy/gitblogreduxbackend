import mongoose from 'mongoose';

const blogs = new mongoose.Schema({
    id : {
        type : Number
    },

    title : {
        type : String
    },
    imageUrl : {
        type : String
    },
    author : {
        type : String
    },
    text : {
        type : String
    },
    languageUsed : {
        type : String
    }
})

const blogList = new mongoose.model('blogList', blogs)
/* 
model('blogList', blogs).. here blogsList is a collection name and the structure for the same is defined in blogs(which is a schema).
and blogInstance is an instance to use the collection in our routes. 
*/
export default blogList