
const express= require('express')
const router = express.Router()
const Subscriber= require('../models/subscribersModels')

router.get('/',async(req,res)=>{
    try {
        const subscribers= await Subscriber.find()
        res.json(subscribers)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})
router.get('/:id',(req,res)=>{
    
    res.send(req.params.id)
})

router.post('/',async(req,res)=>{
    const subscribers= new Subscriber({
        name:req.body.name,
        subscribersToChannel:req.body.subscribersToChannel
    })

    try {
        const newSubscriber= await subscribers.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
    
})

router.patch('/',(req,res)=>{
    
})
router.delete('/:id',(req,res)=>{
    
})



module.exports=router