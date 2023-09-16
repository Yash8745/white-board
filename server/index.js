import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

app.get('/hell',(request,response)=>response.send("Hello cola "))

app.use((request,response)=>{
    response.json({message:'Invalid URL'})
})

server.listen(1234, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', server.address().port);
    }
})