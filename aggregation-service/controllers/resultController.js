const {db, Table} = require('../config/db-config');
const Result = require("../models/resultModel");
const {
    createOrUpdate,
    readAllResults,
    getResultById,
} = require("../config/db");

//create book
const createResult = async (req,res) => {
    const resultData = req.body;
    const result = new Result(resultData);
    const{ success, data} = await createOrUpdate(result);
    if (success){
        return res.json({success, data});
    }
    return res.status(500).json({success : false, message : "Error Result Create"});
};

//Get all books
const getAllResults = async (req,res) => {
    const {success , data} = await readAllResults();
    // console.log("Data of getAllBooks",data);
    if(success){
      return res.json({ success, data });        
    }
    return res.status(500).json({success : false, message : "Error Get Results"});
};

//get one book
const getResult = async (req,res) => {
    const {id} = req.params;
    const{success, data} = await getResultById(id);
    if(success){
      return res.json({success,data})
    }
    return res.status(500).json({success : false, message : "Error Get Results by ID"});
};

// //Update book
// const updateBook = async (req, res) => {
//     const bookData = req.body;
//     const book = new Book(bookData);
//     const { id } = req.params;
//     book.bookId = id;
  
//     const { success, data } = await createOrUpdate(book);
  
//     if (success) {
//       return res.json({ success, data });
//     }
  
//     return res.status(500).json({ success: false, message: "Error Update Book" });
//   };
  
//   // Delete Book
//   const deleteBook = async (req, res) => {
//     const { id } = req.params;
//     const { success, data } = await deleteBookById(id);
//     if (success) {
//       return res.json({ success, data });
//     }
//     return res.status(500).json({ success: false, message: "Error Delete Book" });
//   };
  
  module.exports = {
    createResult,
    getAllResults,
    getResult,
  
  };
