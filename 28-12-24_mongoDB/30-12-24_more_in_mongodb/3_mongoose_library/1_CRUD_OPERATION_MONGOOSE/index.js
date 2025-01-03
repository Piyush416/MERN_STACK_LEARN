const express = require("express")
const PORT = 8080



// use instance name as app
const app = express();


// middlewar
app.use(express.json())
app.use(express.urlencoded({extended : true}))





// MONGODB DATABASES
// using third party library mongoose
// which is use to connect with database
// npm i mongoose
const mongoose = require("mongoose")


const MONGO_URL = "mongodb://127.0.0.1:27017/aggregate"
//connect to database
// if database exist then use it 
// else it create the database and use it
// this url can be seen to any one
// so we create .env file and use it 
// and we cannot push that env file there
mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDb connection Est.");

}).catch(() => {
    console.log("Failed to Connect");

})
const connection = mongoose.connection;



// SCHEMA DEFINE
// create a schema (types of data and fields)
// it is the constructor class we use new keyword here
const userSchema = new mongoose.Schema({
    id : Number,
    name: String,
    quantity: Number,
    price: Number
})



//MODEL DEFINE
//model -> do anything with collections -> push data or pull data
// collection name singluar 
// it automatically convert it into plural
const productModel = mongoose.model("item", userSchema);



// route
app.get("/api/users", async (req, res) => {
    const product = await productModel.find();
    res.json(product);
})


// get id as paramater in url and show that data
app.get("/api/users/:id", async (req, res) => {
    const userId = Number(req.params.id); // this return the string to we type cast this
    // findOne method if find the give the data else return the null
    const user = await productModel.findOne({id : userId});
    if(user)
    {
        res.json(user);
    }
    else
    {
        res.json({"Status" : "User not found"})
    }
})


// we use thunder client extension to send POST request 
// POST route -> add the data in database 
app.post("/api/users/add", async (req, res) => {
    // console.log(req.body);
    let data = req.body;
    const newUser = await new productModel(data);
    newUser.save();
    res.json(newUser);
})



// we use thunder client extension to send POST request 
// PATCH route update the data in database we use patch
app.patch("/api/users/update/:id", async (req, res) => {
    const userId = Number(req.params.id);
    const updateData = req.body;
    console.log(updateData);
    await productModel.findOneAndUpdate(
        {id:userId},
        {$set : updateData},
        {   new : true, //by default the function return the old data with new:true it will return the updated data
            runValidators: true,
            upsert : true // if data is not exist then insert the data
        });
        
    res.send("User Update")
})
//put is use for update whole the document 
// while patch will update part by part




// DELETE route by id
app.delete("/api/users/delete/:id", async (req, res) => {
    const userId = Number(req.params.id);
    const delData = await productModel.findOneAndDelete({id : userId});
    res.send(`Product Id : ${delData.id} and Product Name : ${delData.name} Deleted Successfully..`);
})




// serve listen at port number 8080
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

});



//next day we learn 
// becript library -> for password protection
// jwt