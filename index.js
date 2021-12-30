import express from "express"
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import {DetailsRouter} from './Details.js';

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


dotenv.config(); // all keys it will put in  process.env

const PORT = process.env.PORT;



const MONGO_URL = process.env.MONGO_URL;



async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongodb connected");
    return client;
}

export const client = await createConnection();

app.get('/',(request,response)=>{
    response.send("Hello 🌏d🌍🌎");
})

app.use('/details',DetailsRouter);


app.listen(PORT,()=>console.log("app started",PORT));