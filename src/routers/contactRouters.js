const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {
    getContacts,
    getContactByID,
    postNewContact,
} = require('../controllers/contactControllers.js');

router.get('/contacts', getContacts);

router.get('/contacts/:id', getContactByID);

router.post('/contacts', postNewContact);

module.exports = router;