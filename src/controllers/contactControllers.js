// Copied code, rewrite once things slow down next week


let contactsData = require('../../data/contacts');

const getContacts = (req, res) => {
    res.json(contactsData);
};

const getContactByID = (req, res) => {
    const contactID = req.params.id;
    // console.log(contactID);
    const getContact = contactsData.find((contact) => contact._id === +contactID);
    if (!getContact) {
        res.status(500).send('Account not found.');
    } else {
        res.json(getContact);
    }
};

const postNewContact = (req, res) => {
    // * Mapping the contactDataArray to get all the existing ID's into an array.
    idArray = contactsData.map((object) => object._id);
    // * Finding the max value in the array of IDs
    let maxID = Math.max(...idArray);
    // * Adding 1 to the current max value every time the postNewContact route is run.
    let newID = maxID + 1;

    let newContact = req.body;
    // * Adding newID key and value to req.body at the object's first position.
    let keyValues = Object.entries(newContact);
    keyValues.splice(0, 0, ['_id', newID]);
    newContact = Object.fromEntries(keyValues);
    contactsData.push(newContact);
    res.json(newContact);
};

//* Exporting route functions
module.exports = {
    getContacts,
    getContactByID,
    postNewContact,
};