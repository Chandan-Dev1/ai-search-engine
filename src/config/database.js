import mongoose from "mongoose";

async function ConnectDataBase() {
    await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("database is connected successfuly");
            
        })

    
}
ConnectDataBase()

export default ConnectDataBase