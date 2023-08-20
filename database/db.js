import mongoose from "mongoose";


const DBconnection= async()=>{
    const DB_URI=`mongodb+srv://silpa12sss:fileshare@cluster0.d3yuass.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(DB_URI, {useNewUrlParser:true});
        console.log("DB connected successfully");
    } catch (error) {
        console.log("error while connecting with Database", error.message);
    }
}

export default DBconnection;

// fileshare