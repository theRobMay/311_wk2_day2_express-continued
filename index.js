const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('./public'));

const contacts = require('./src/routers/contactRouters');

const vehicles = require('./src/routers/vehicleRouters');

const comments = require('./src/routers/commentRouters');

const products = require('./src/routers/productRouters');

app.use(contacts);

app.use(vehicles);

app.use(comments);

app.use(products);
