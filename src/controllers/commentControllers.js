// Copied code, rewrite once things slow down next week

let commentsData = require('../../data/comments');

const getComments = (req, res) => {
    res.json(commentsData);
};

const getCommentByID = (req, res) => {
    const commentID = req.params.id;
    const getComment = commentsData.find((comment) => comment._id === +commentID);
    if (!getComment) {
        res.status(500).send('Account not found.');
    } else {
        res.json(getComment);
    }
};

const postNewComment = (req, res) => {
    idArray = commentsData.map((object) => object._id);
    let maxID = Math.max(...idArray);
    let newID = maxID + 1;

    let newComment = req.body;
    // * Adding newID key and value to req.body at the object's first position.
    let keyValues = Object.entries(newComment);
    keyValues.splice(0, 0, ['_id', newID]);
    newComment = Object.fromEntries(keyValues);
    commentsData.push(newComment);
    res.json(newComment);
};

//* Exporting route functions
module.exports = {
    getComments,
    getCommentByID,
    postNewComment,
};