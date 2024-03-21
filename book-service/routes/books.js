const router = require("express").Router();
const { createBook, getAllBooks, getBook, updateBook, deleteBook } = require("../controllers/bookController");

router.route("/book")
    .post(createBook)
    .get(getAllBooks);
router.route("/book/:id")
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;
