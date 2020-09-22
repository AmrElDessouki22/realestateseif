const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amreldessouki:amreldessouki@cluster0.2j7gd.mongodb.net/htiseif', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
module.exports = mongoose