const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyPasser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://thd-db-admin:$f8vde23Qjxn2tD9eSjkPQ1$9!Uur2@thd-dev.po52k.mongodb.net/dev1?retryWrites=true&w=majority',{
    useNewUrlParser: true
}
);



app.use(morgan('dev'));
app.use(bodyPasser.urlencoded({extended: false}));
app.use(bodyPasser.json());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



module.exports = app;

