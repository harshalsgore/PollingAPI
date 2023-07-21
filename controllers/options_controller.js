const Option = require('../models/option');
const Question = require('../models/question');

module.exports.create = async function(req,res){
    
    let opt = await Option.create({
        option:req.body.content,
        question:req.params.id,
    })
    
    let updateOpt = await Option.findByIdAndUpdate(opt._id,{"add_vote":`http://localhost:3000/api/v1/options/${opt._id}/add_vote`})
    updateOpt.save()
   
    let question = await Question.findById(req.params.id);
    if(question){
    question.options.push(updateOpt)
    question.save()

    res.send(question) 
    }
    else{
        res.send('Question does not exists')
    }
}

module.exports.add_vote=async function(req,res){

    let opt = await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 }})
    
    if(opt){
        await opt.save();
        res.send(opt)
    }
    else{
        res.send('Option does not exits')
    }
}

module.exports.delete = async function(req,res){
    
    const opt = await Option.findById(req.params.id);
    
    if(opt){
        const quesId = opt.question;

        await Question.findByIdAndUpdate(quesId,{$pull:{options:req.params.id}});
        
        await Option.findByIdAndDelete(req.params.id)

        res.send('Option deleted')
    }
    else{
        res.send('Option id not exists')
    }
}
