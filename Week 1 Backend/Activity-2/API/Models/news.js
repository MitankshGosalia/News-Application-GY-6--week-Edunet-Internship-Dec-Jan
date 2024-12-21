const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tags: [String],
  isPublished: { type: Boolean, default: false }
});

newsSchema.methods.publish = function() {
  this.isPublished = true;
  return this.save();
};

newsSchema.statics.findByAuthor = function(author) {
  return this.find({ author });
};

module.exports = mongoose.model('News', newsSchema);