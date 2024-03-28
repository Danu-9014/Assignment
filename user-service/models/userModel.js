const dynamoose = require("dynamoose");
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
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      enum: ["Reader", "Author"],
    },
    readingBook: {
      type: Object,
      schema: {
        bookId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        noOfPages: {
          type: Number,
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
    },
    noOfPagesRead: {
      type: Number,
    },
    completedBooks: {
      type: Array,
      schema: [{
            type: Object,
            schema: {
              bookId: {
                type: String,
                required: true,
              },
              name: {
                type: String,
                required: true,
              },
              noOfPages: {
                type: Number,
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
        }]
    },
    sessions: {
      type: Array,
      schema: [{
            type: Object,
            schema: {
              sessionStart: {
                type: Date,
                required: true,
              },
              sessionEnd: {
                type: Date,
                required: true,
              },
            },
        }]
    },
    createdDate: {
      type: Date,
      default: Date.now()
    }
  }
);
const User = dynamoose.model("User", userModel);

module.exports = User;
