const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  name: { type: String,required: true},
  tasks_created: { type: Number, required: true},
  tasks_completed: {type: Number, required: true},
  duration: {type: Number, required: true}
}, {
  timestamps: true,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;