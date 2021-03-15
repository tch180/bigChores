const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const Child = require('../models/child')


// GET Route api/user/child
// @desc Get all children for that user 
// access private

router.get('/', auth,async(req,res)=>{
    try {
        const children = await Child.find({user: req.user.id}).sort({
            age:-1,
        });
        res.json(children)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error')
    }
});


//POST ROUTE api/child 
//@desc add new child to user 
//access private

router.post('/',auth,async(req,res)=>{
    const {name,age,sex,} = req.body;
    try {
        const newChild = new Child({
            name,
            age,
            sex,
            user: req.user.id
        });
        const child = await newChild.save();
        res.json(child);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
})

//UPDATE ROUTE /api/user/child/:id
// @desc update child 
//access private

router.put('/:id', auth, async (req,res)=>{
    const {name,age,sex}=req.body
    //child object
    const childFields = {}
        if (name) childFields.name = name;
        if (age) childFields.age = age;
        if (sex) childFields.sex = sex;
    try {
        let child = await Child.findById(req.params.id);
        if(!child) return res.status(404).json({msg: 'child not found not found'})
        //check the child is the users child 
        if (child.user.toString()!== req.user.id) {
            return res.status(401).json({msg: 'NOT AUTHORIZED'})
        }
        child = await Child.findByIdAndUpdate(
            req.params.id,
            {$set: childFields},
            {new: true}
        );
        res.json(child);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
    });

    //DELETE ROUTE
    // @desc delete child from parent
    //access private

    router.delete('/:id',auth, async (req,res)=>{
        try {
            let child = await Child.findById(req.params.id);
            if(!child) return res.status(404).json({msg: 'Child not found'})
            //check that child is the users child
            if(child.user.toString() !== req.user.id){
                return res.status(401).json({msg: 'NOT AUTHORIZED'});
            }
            await Child.findByIdAndRemove(req.params.id);
            res.json({msg: 'Child Removed'})
        } catch (error) {
            console.error(error.message)
            res.status(401).json({msg: 'NOT AUTHORIZED'})
        }
    })

    module.exports = router; 