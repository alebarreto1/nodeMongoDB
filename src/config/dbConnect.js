import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:5jnCC3@alura.f1asf.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;