const Question = require('../models/question')
const Option = require('../models/option')

module.exports.create = async function(req,res){
    try{
        let question = await Question.create(req.body);
        console.log(question);
        res.send(question);
    }
    catch(err){
        console.log("error in creating the question schema",err);
    }
}

module.exports.showDetails = async function(req,res){

        let question = await Question.findById(req.params.id).populate('options')
    
        if(question){
            res.send(question);
        }
        else{
            res.send("Id of the given question does not exits");
        }

}

module.exports.deleteQues = async function(req,res){

        let question = await Question.findById(req.params.id).clone().catch(function(err){ console.log(err)})
        
        if(question){

            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})

            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                
            res.send("Requested Question deleted");
    
        }
        else{
            res.send('Id of the given question does not exits')
        }
}
