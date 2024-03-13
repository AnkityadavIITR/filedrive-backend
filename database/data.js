import mongoose from "mongoose";

async function dbConnect(){
    mongoose.connect
    (process.env.MONGO_URI || 'mongodb+srv://yadavankit20062000:WqkO3Yy0fzZHgpj8@cluster0.n1zrzma.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',{dbName:"fdrive"})
    .then((c)=>console.log(`Database connected with ${c.connection.host}`))
    .catch(err=>console.log(err));
}
export default dbConnect;
