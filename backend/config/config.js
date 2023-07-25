import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true,});
        const url= `DB mongo online ${connectionDB.connection.host}... puerto ${connectionDB.connection.port} 🤠...`;
        console.log(url);
    } catch (error) {
        console.log(`no funshion, ${error.message}  :(`);
        process.exit(1);
    }
}

export default conectarDB;