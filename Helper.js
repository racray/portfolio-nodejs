import { client } from "./index.js";

export async function GetDetails(filter) {
    return await client.db("xrayed").collection("details").find(filter).toArray();
}
export async function PostDetails(data) {
    return await client.db("xrayed").collection("details").insertOne(data);
}