const express = require('express');
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  content :{
    type:String,
    required:true
  },
  completed : {
    type : Boolean,
    default : false
  },
  user_id :{
    type:String,
    required:true
  }
});

itemSchema.methods = {
  setCompleted : function()
  {
    this.completed = true;
  },
  undoCompleted : function()
  {
    this.completed = false;
  },
  toggleCompleted : function (){
    if(this.completed)
      this.undoCompleted()
    else
      this.setCompleted()
  }
}
module.exports = mongoose.model('Item', itemSchema)
