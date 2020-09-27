const express = require('express');
const https = require('https');
const cors = require('cors');

const app = express();

const port = 3000;

//Middlewares
app.use(express.urlencoded({extends: false}))
app.use(express.json());
app.use(cors());

//Routs
app.use(require('./routes/filters'));

app.listen(port, ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
});
