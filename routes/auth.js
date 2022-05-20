const router = require('express').Router();
const res = require('express/lib/response');
const akash = require('../modules/user');

//Get all posts
router.get('/', async(req, res) => {
    try {
        const posts = await akash.find()
        res.send(posts);
    } catch (err) {
        res.status(400).send({ message:'Something went wrong',data: err})
    }
})

//Post new user
router.post('/register', async (req, res) => {
    const userInf = req.body
    const user = new akash(userInf)
    try {
        const saveUser = await user.save()   
        res.status(200).send({ message: 'User added successfully',data: saveUser})
    }
    catch (err) {
        res.status(400).send({ message:'Something went wrong',data: err})
    }
})

//get specific post 
router.get('/:postId', async (req, res) => {
   // console.log(req.params.postId)
    try {
        const singlePost = await akash.findById(req.params.postId)
        res.send(singlePost)
    } catch (err) {
        res.status(400).send({ message:'Something went wrong',data: err})
    }
 })

//delete specific post
router.delete('/:postId',async (req, res) => {
    try {
        const removedPost = await akash.deleteOne({ _id: req.params.postId })
        const allPost = await akash.find()
        res.status(200).send({ message: 'User added successfully',data: allPost })
    } catch (err) {
        res.status(400).send({ message:'Something went wrong',data: err})
    }
})

//update specific post
router.patch('/update/:postId', async (req, res) => {
    const updateUser = req.body
    try {
        const updatePost = await akash.updateOne({ _id: req.params.postId }, { $set: updateUser } )
        res.send(updatePost)
    } catch (err) {
        res.status(400).send({ message:'Something went wrong',data: err})
    }
})

module.exports = router