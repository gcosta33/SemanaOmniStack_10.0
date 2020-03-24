const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://omni10:omni10@cluster0-yrf3q.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({ origin: 'http://localhost:3000' }))
// app.use(cors()) //libera geral
app.use(express.json());
app.use(routes);

app.listen(3113);
