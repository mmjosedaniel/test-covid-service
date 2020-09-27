# Test Covid Servise

## Description:

This is a test.

The test is to create a servise to filter the information from a web json API and offer the results as a web json API.

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
Intenté traer el json de la API ofecida con https mas no me fue posible:

```javascript
const https = require('https');

```

Después un algunas horas de buscar la forma correcta de traer el json de la URL encontrada en en la prueba decidí hacer un curso completo sobre backend con Node js y Express js:

[Javascript FullStack](https://www.youtube.com/playlist?list=PLo5lAe9kQrwq7n_REwpZdfggPCBW2ggnh).

Al final y después de algunos errores de implementación terminé por utilizar fetch() de node-fetch;

```javascript
const fetch = require('node-fetch');

```
Al final mi implementación es la aplicación de un filter() sobre el fetch que hice a la API json.