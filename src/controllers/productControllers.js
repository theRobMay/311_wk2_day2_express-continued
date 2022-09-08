// Copied code, rewrite once things slow down next week

//* Accessing local data
let productsData = require('../../data/products');

const getProducts = (req, res) => {
    res.json(productsData);
};

const getProductByID = (req, res) => {
    const productID = req.params.id;
    // console.log(contactID);
    const getProduct = productsData.find((product) => product._id === +productID);
    if (!getProduct) {
        res.status(500).send('Account not found.');
    } else {
        res.json(getProduct);
    }
};

const postNewProduct = (req, res) => {
    // * Mapping the contactDataArray to get all the existing ID's into an array.
    idArray = productsData.map((object) => object._id);
    // * Finding the max value in the array of IDs
    let maxID = Math.max(...idArray);
    // * Adding 1 to the current max value every time the postNewContact route is run.
    let newID = maxID + 1;

    let newProduct = req.body;
    // * Adding newID key and value to req.body at the object's first position.
    let keyValues = Object.entries(newProduct);
    keyValues.splice(0, 0, ['_id', newID]);
    newProduct = Object.fromEntries(keyValues);
    productsData.push(newProduct);
    res.json(newProduct);
};

//* Exporting route functions
module.exports = {
    getProducts,
    getProductByID,
    postNewProduct,
};