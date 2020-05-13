const express = require('express');
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  content :{
    type:String,
    required:true,
    trim:true
  },
  completed : {
    type : Boolean,
    default : false
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
  }
}
module.exports = mongoose.model('Item', itemSchema)
module.exports = itemSchema;
