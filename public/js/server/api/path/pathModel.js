var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PathSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
  
});

module.exports = mongoose.model('path', PathSchema);
