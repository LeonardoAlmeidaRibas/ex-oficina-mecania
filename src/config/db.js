import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}.mongodb.net/`
            // `mongoose.connect('mongodb+srv://<DB_USER>:<PASSWORD>i@<CLUSTER_NAME>.mongodb.net/');`
          );
          console.log("Conectado ao Mongo DB")

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;