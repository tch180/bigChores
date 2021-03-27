const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const Chore = require('../models/chores')
const Child = require('../models/child');


// GET ROUTE api/child/chore 
//@ desc get the chores for that child 
//access private && shared. both child and parent should see chores. 

router.get('/:id', auth, async(req,res)=>{
    try {
        console.log("starting to get chores route. ")
        const chores = await Chore.find({child: req.params.id}).sort({
            date:-1 
        })
        console.log(chores)
        res.json(chores);
        console.log("chores route complete ")
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
});

//POST ROUTE api/child/chore
// @desc add a new chore for the child, but only the parent may add chore and not the child
// access private

router.post('/:id', auth, async(req,res)=>{
    const {choreName,value,completed} = req.body
    try {
        console.info("----Starting to post new chore to child---. ")
        const newChore = new Chore ({
            choreName,
            value,
            completed,
            child: req.params.id, //// req.user.id.child -- Allows adding to db, but not locked to user/child, if adding child.id: id returns undefined
        });
        //console.info("After newChore ",newChore.child.id) //  <-- undefined child 
        const chore = await newChore.save();
        res.json(chore);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
});


// UPDATE ROUTE api/child/chore/:id 
router.put('/:id', auth, async (req,res)=>{
    const { name,value,completed} = req.body;
    // Chore object 
    const choreFields = {}
    if (name) choreFields.name = name; 
    if (value) choreFields.value = value;
    if (completed) choreFields.completed = completed 
    try {
        // let chore = await Chore.findById(req.params.id);
        // console.log("Checking chore ",chore)
        // if(!chore) return res.status(404).json({msg: 'Chore not found, Please try again.'})
        // Yet another check, check that the chore is the childs chore, 
        // if ( chore.child.toString() !== req.child.id){
        //     return res.status(401).json({msg: 'NOT AUTHORIZED'})
        // }
        chore = await Chore.findByIdAndUpdate(
            req.params.id,
            {$set: choreFields},
            {new: true}
        );
        res.json(chore);
    } catch (error) {
        console.error(error.message)
        res.status(401).json({msg: 'server error, check update route chore  '})
    }
})

// DELETE ROUTE 
// @desc delete chore from child 
// access private 

router.delete('/:id', auth, async (req,res)=>{
    try {
        
        let chore = await Chore.findById(req.params.id);
        // Check if chore exists 
        if(!chore) return res.status(404).json({ msg: ' Chore not found'})
        // Check that the chore is completed
        if(chore.completed !== true) return res.status(404).json({ msg: 'Chore not completed, please try again later'})
        
        await Chore.findByIdAndRemove(req.params.id);
        res.json({msg: 'Chore Removed'})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({msg: 'Server error check delete route chore '})
    }
})

module.exports = router; 