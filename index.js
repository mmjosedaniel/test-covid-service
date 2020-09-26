const express = require('express');
const https = require('https');

const app = express();

const port = 3000;

//Middlewares
app.use(express.json());

//Routs
app.use(require('./routes/filters'));

app.listen(port, ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
});
