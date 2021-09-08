const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express(); 


const registerRoutes = require('./routes/route');


const normalizePort = val => {
    var port = parseInt(val, 10);  
    if (isNaN(port)) {
      return val;
    }  
    if (port >= 0) {
      return port;
    }  
    return false;
}

const mongooseConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: true
}

mongoose.connect("mongodb://127.0.0.1:27017/login")
.then(() => {
    console.log('connected to db');
    const port = normalizePort(process.env.SERVICE_PORT || "5000");
    app.listen(port, () => {
        console.log("Node server listening on port " + port);
    })
}).catch((err) => {
    console.log('err in db connection');
    console.log(err.message);
})

app.use(bodyParser.json({ limit : '100mb'}));
app.use(bodyParser.urlencoded({ extended : true }))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use((req, res, next) =>{
    // console.log(req.url);
    next();
})

app.use('/api/register', registerRoutes)