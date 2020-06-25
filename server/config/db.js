var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Ahmedraza:Ahmed786@cluster0-po0uf.mongodb.net/test?retryWrites=true&w=majority",  {useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;