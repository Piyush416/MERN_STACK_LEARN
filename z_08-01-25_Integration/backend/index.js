const express = require("express")

// middler war import
const cors = require("cors")

const PORT = 8080;


const app = express()



app.use(cors());


// connect to database
const mongoose = require("mongoose")

const MONGO_URL = "mongodb://127.0.0.1:27017/integration"

mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDb connection Est.");

}).catch(() => {
    console.log("Failed to Connect");

})
const connection = mongoose.connection;


// schema
const userSchema = new mongoose.Schema({
    id: Number,
    name : String,
    password: String
})


const userModel = mongoose.model("user",userSchema)



app.get("/", async (req, res) => {
    const user = await userModel.find();
    res.json(user);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

})