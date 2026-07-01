/*const { MongoClient } = require("mongodb");
const fs = require("fs");

const uri = "mongodb://sksarifulali129_db_user:Mon85%40%40**@ac-yakuung-shard-00-00.u8hrk8d.mongodb.net:27017,ac-yakuung-shard-00-01.u8hrk8d.mongodb.net:27017,ac-yakuung-shard-00-02.u8hrk8d.mongodb.net:27017/?ssl=true&replicaSet=atlas-pfmfuu-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(uri);

async function uploadJSON() {
    try {
        await client.connect();

        const db = client.db("mockaro");
        const collection = db.collection("user");

        // Read JSON file
        const jsonData = JSON.parse(
            fs.readFileSync("mockaroo.json", "utf8")
        );

        // Insert data
        await collection.insertMany(jsonData);

        console.log("JSON uploaded successfully!");
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

uploadJSON();*/
const mongoose = require("mongoose");
const express = require("express");
application = express();

mongoose.connect("mongodb://sksarifulali129_db_user:Mon85%40%40**@ac-yakuung-shard-00-00.u8hrk8d.mongodb.net:27017,ac-yakuung-shard-00-01.u8hrk8d.mongodb.net:27017,ac-yakuung-shard-00-02.u8hrk8d.mongodb.net:27017/mockaro?ssl=true&replicaSet=atlas-pfmfuu-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log(err);
});
const UserSchema = new mongoose.Schema({
id:Number,
first_name:String,
last_name:String,
email:String,
gender:String
});
const UserModel = mongoose.model("mongmdl",UserSchema,"user");
application.get("/" , (req,res) => {
UserModel.find()
.then((result) => {
    res.send(result);
})
.catch((err) => {
    res.send(err);
})
});
application.listen(3000);

