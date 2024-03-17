import mongoose from "mongoose";
async function dbConnect(){
  console.log(process.env.MONGO_URI)
    mongoose.connect
    (process.env.MONGO_URI,{dbName:"fdrive"})
    .then((c)=>console.log(`Database connected with ${c.connection.host}`))
    .catch(err=>console.log(err));
}
export default dbConnect;
