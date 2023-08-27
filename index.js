const express = require("express");
require('dotenv').config();
// ! setting up routers
const productRouter = require('./routes/products')
const userRouter = require('./routes/users')
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')
// ! Server
const server = express();
server.listen(process.env.PORT, (req, res) => {
  console.log("Server Started!");
});

// ! db connection
main().catch(err => console.log(err))
async function main(){
  await mongoose.connect(process.env.MONGO_URI).then(() => console.log('Database Connected!'))
}


// ! Middlewares
server.use(cors())
server.use(express.json());
server.use(express.static("build"));

// ? apply router to a new path that starts with /api and bind it with server using middleware

// ! API's / Endpoints
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'))
})
// ? comments 

// * npm install mongoose 
// * import mongoose in index.js -- const mongoose = require('mongoose');
// * make a connection function main for connecting to local database
// main().catch(err => console.log(err))
// async function main(){
//   await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
//   console.log('Database Connected!')
// }

// * import Schema from mongoose 
// const {Schema} = mongoose;
// * make new schema according to needs
// * make a new model for the schema that you made previously
// * move your schema and model that you've made here to the new folder named as models and inside a file named as product.js
// * then from models folder -- export the Product model and import it in controller's product.js file

// * then go to controller's product.js and then make necessary code changes in that file -- refer to ./controllers/product.js



//  ! flow 
// ? model
// ? controller
// ? routes
// ? index
// ? frontend
