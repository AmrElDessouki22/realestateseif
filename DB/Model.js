const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 
const item = new Schema({
  image_url: String,
  short_description: String,
  location: String,
  Phone:String,
  price:String,
  email:String
},{timestamps:true});
const MyModel = mongoose.model('item', item);
module.exports= MyModel