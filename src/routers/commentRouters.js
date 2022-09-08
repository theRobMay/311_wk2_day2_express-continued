const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {
    getComments,
    getCommentByID,
    postNewComment,
} = require('../controllers/commentControllers.js');

router.get('/comments', getComments);

router.get('/comments/:id', getCommentByID);

router.post('/comments', postNewComment);

module.exports = router;