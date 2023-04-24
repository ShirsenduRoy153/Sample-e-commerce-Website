const mongoose = require("mongoose")

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/dbms", { useNewUrlParser: true })
    .then(() => console.log("Connected Sucessfully..."))
    .catch((err) => console.log("There might some issues. Please check after sometimes..." + err));

const LoginSchema = new mongoose.Schema({
    product: {
        type: String
    },
    name: {
        type: String
    },
    qty: {
        type: Number
    },
    address: {
        type: String
    },
    cont: {
        type: Number
    }
})

const collection2 = new mongoose.model("db2", LoginSchema);

module.exports = collection2