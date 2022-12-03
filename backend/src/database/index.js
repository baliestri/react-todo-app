const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://root:root@mongodb/tododb?authSource=admin";

module.exports = mongoose.connect(MONGODB_URI);
