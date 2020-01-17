const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://omni10:omni10@cluster0-yrf3q.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());

app.post('/',(request,response)=>{
    console.log(request.body);
    return response.json({
        mensage: 'Hello 1omni'
    });
});

app.listen(3333);
