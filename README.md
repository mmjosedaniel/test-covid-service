# Test Covid Service

## Description:

This is a test.

The test is to create a service to filter the information from a web json API and offer the results as a web json API.

To call the information you can write the related filter in the url: root/filter.

The filters are:

* /male
* /female
* /zerototwenty
* /twentytoforty
* /fortyandplus

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

I tried to implement the Json API with https but it was not possible:

```javascript
const https = require('https');

```
After some hours of serching the correct way to bring the Json from the URL of the test, I decided to watch a complete course
of Node and Express js.

[Javascript FullStack](https://www.youtube.com/playlist?list=PLo5lAe9kQrwq7n_REwpZdfggPCBW2ggnh).


At the end, and after some errors of implementation I ended by using fetch() from node-fetch:

```javascript
const fetch = require('node-fetch');

```
At the end, my implementation is the use of a filter() to a fetch() to the Json API.