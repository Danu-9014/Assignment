const dynamoose = require("dynamoose");
const Book = require("./bookModel");
const userModel = new dynamoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      enum: ["Reader", "Auther"],
    },

    readingBook: {
      type: Set,
      schema: [Book],
    },
    noOfPagesRead: {
      type: Number,
    },
    completedBooks: [
      {
        type: Set,
        schema: [Book],
      },
    ],
  },
  { timestamps: true }
);
const User = dynamoose.model("User", userModel);

module.exports = User;
