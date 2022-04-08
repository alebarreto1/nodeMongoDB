import mongoose from "mongoose";
//connect with your database password and description:
mongoose.connect("mongodb+srv://alura:<password>@alura.f1asf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
