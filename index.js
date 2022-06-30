require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb://localhost:27017/blockingWebETE";
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || mongoString,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {  
  console.log("Database Connected!");
});

app.use("/api/routes", routes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
}

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Started at ${8000}`);
});
