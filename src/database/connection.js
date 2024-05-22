const mongoose =require("mongoose");

module.exports = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DBCONNECTION)
        console.log("database connected");
    }
    catch(error){
        console.log("database connection failed");
        console.log(error)
}}