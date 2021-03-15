const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const Child = require('../models/child');
const User = require('../models/User');


// Child Login
// Child will login using there name && the parent email
// The child name will be compared to the children under the parent email 
//.. @Thought@ Maybe better to add a pin to the child model and then use that for the child login. 

router.post('/',auth, async (req,res) => {
    console.log("trying childLogin")
    const {name,email,child} = req.body 
    try {
        // find user via email and the child/s 
        let user = await User.findOne({email});
        console.log(user)
        // find child name from that user 
        let childName = await Child.findOne({name})
        console.log(childName)
        //compare the names, if matched then authorized, If not then not authorized. 
        if (user.Child.name  === childName){
             console.log('success')
             res.json(user)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send("server error check childLogin")
    }
})

module.exports = router;

