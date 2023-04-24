const mongoose = require("mongoose")

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/dbms", { useNewUrlParser: true })
    .then(() => console.log("Connected Sucessfully..."))
    .catch((err) => console.log("There might some issues. Please check after sometimes..." + err));

const LoginSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String,
    }
})

const collection1 = new mongoose.model("db1", LoginSchema);

module.exports = collection1