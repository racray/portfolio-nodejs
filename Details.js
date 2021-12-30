import { PostDetails,GetDetails } from "./Helper.js";
import express from 'express';
const router = express.Router();

router.route('/')
.get(async (request,response)=>{
    console.log(request.query);
    const filter = request.query;
    let fDetails = await GetDetails(filter); //cursor to array
    response.send(fDetails);
})
.post(async (request, response) => {
    const data = request.body;
    const result = await PostDetails(data);
    response.send(result);
})

export const DetailsRouter = router;