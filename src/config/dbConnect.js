import mongoose from "mongoose";

mongoose.connect('mongodb+srv://nelson:12345@cluster0.1b7ke.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;