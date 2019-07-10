var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/reactHN", {
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on("connected", function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
