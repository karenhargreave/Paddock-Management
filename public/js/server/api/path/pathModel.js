var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PathSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  
  area: {
    type: Number,
    required: true
  },
  animal: {
    type: String,
    required: false
  } 
  
});

module.exports = mongoose.model('path', PathSchema);
