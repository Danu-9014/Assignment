const dynamoose = require("dynamoose");
//const User = require("./userModel");

const bookModel = new dynamoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: false,
    },
  },
  { timestamps: true }
);
const Book = dynamoose.model("Book", bookModel);

module.exports = Book;
