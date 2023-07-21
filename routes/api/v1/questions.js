const express=require('express')
const Router=express.Router()
const QuestionController=require('../../../controllers/questions_controller')

Router.post('/create',QuestionController.create)
Router.get('/view/:id',QuestionController.showDetails)
Router.delete('/delete/:id',QuestionController.deleteQues)
Router.use('/options',require('./options'))


module.exports=Router