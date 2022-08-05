const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribersToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: String,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subscribersSchema);
