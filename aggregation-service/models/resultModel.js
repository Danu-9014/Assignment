const dynamoose = require("dynamoose");
//const User = require("./userModel");

const resultModel = new dynamoose.Schema(
  {
    resultId: {
      type: String,
      required: true,
    },
    averageSessionDuration: {
      type: Array,
      schema: [{
            type: Object,
            schema: {
              date: {
                type: String,
                required: true,
              },
              sessionDuration: {
                type: String,
                required: true,
              },
            },
        }]
    },
    averageRating: {
      type: Array,
      schema: [{
            type: Object,
            schema: {
              author: {
                type: String,
                required: true,
              },
              rating: {
                type: String,
                required: true,
              },
            },
        }]
    },


  },
);
const Result = dynamoose.model("Result", resultModel);

module.exports = Result;
