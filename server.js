const express = require('express');
const dotenv = require('dotenv');
const  bootcamps  = require('./routes/bootcamps');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'});

const app = express();
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

connectDB();

app.use('/api/v1/bootcamps',bootcamps);

const server = app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} 
    mode on port ${PORT}`));

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`);
    server.close(()=>{
        process.exit(1)
    });
})


