const express=require('express')
const Router=express.Router()

Router.use('/questions',require('./questions'));
Router.use('/options',require('./options'))

module.exports=Router