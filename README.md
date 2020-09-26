# Test Covid Servise

## Description:

This is a test.

The test is to create a servise to filter the information from a web json API and offer the results as a web json API.

## Development:

Since the only thing I knew about Express is that it is a Node.js backend framework, I started by watching some YouTube videos:

* [Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE).
* [LEARN EXPRESS JS IN 15 MINUTES!](https://www.youtube.com/watch?v=JlgKybraoy4).
* [Making HTTP Requests from NodeJS](https://www.youtube.com/watch?v=rh7opViDFMo).
* [How To Make an HTTP Request In Node.js Tutorial](https://www.youtube.com/watch?v=MouZdENJddQ).

After watching the videos I started to read the documentation and I proceeded with the installation:

* [expressjs.com/](https://expressjs.com/).

I code the hello world app from the documentation to check that Express is working:

[Hello world example](https://expressjs.com/en/starter/hello-world.html).

```javascript
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
});

```
