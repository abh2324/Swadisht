import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ashutoshgaur50:swadisht@cluster0.5otyx6i.mongodb.net/Swadisht")
    .then(() =>  
        console.log(`DB connected successfully`)
    );
}