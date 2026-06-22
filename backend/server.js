
import express from 'express';

import axios from 'axios';

import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors());

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded (HTML form submissions)
app.use(express.urlencoded({ extended: true }));

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



app.post("/", async (req, res) =>{

    const type = req.body.type
    const participants = req.body.participants

    if (type || participants){
            try {
                const response  = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
                const data = response.data;
                const randomValue = data[ Math.floor(Math.random() * data.length)]
                res.json(randomValue); 
            } catch (error) {
                console.error("Failed to make request:", error.message); 
                res.status(500).json({error: error.message}); 
            }
            return
    }else{
        res.status(404).json({message: "you did not provide the correct body property"})
    }


});






app.listen(port, () => {console.log(`server running on port: ${port}`)})