
import express from 'express';

import axios from 'axios';

import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const response  = await axios.get("https://bored-api.appbrewery.com/random");
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).json({error: error.message});
    }
});






app.listen(port, () => {console.log(`server running on port: ${port}`)})