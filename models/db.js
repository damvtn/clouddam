const mongoose = require('mongoose');

const url = "mongodb+srv://cloud22:12345@cluster0.ywvhkwe.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
        console.log("An Error Occured");
    }
})

require('./employee.model');
require('./product.model');
require('./orders.model');