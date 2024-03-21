const {db, Table} = require('../config/db-config');
const Book = require("../models/bookModel");
const {
    createOrUpdate,
    readAllBooks,
    getBookById,
    deleteBookById,

} = require("../config/db");

//create book
const createBook = async (req,res) => {
    const bookData = req.body;
    const book = new Book(bookData);
    const{ success, data} = await createOrUpdate(book);
    if (success){
        return res.json({success, data});
    }
    return res.status(500).json({success : false, message : "Error Book Create"});
};

//Get all books
const getAllBooks = async (req,res) => {
    const {success , data} = await readAllBooks();
    console.log("Data of getAllBooks",data);
    if(success){
      return res.json({ success, data });        
    }
    return res.status(500).json({success : false, message : "Error Get Books"});
};

//get one book
const getBook = async (req,res) => {
    const {id} = req.params;
    const{success, data} = await getBookById(id);
    if(success){
      return res.json({success,data})
    }
    return res.status(500).json({success : false, message : "Error Get Books by ID"});
};

//Update book
const updateBook = async (req, res) => {
    const bookData = req.body;
    const user = new Book(bookData);
    const { id } = req.params;
    user.id = id;
  
    const { success, data } = await createOrUpdate(book);
  
    if (success) {
      return res.json({ success, data });
    }
  
    return res.status(500).json({ success: false, message: "Error Update Book" });
  };
  
  // Delete Book
  const deleteBook = async (req, res) => {
    const { id } = req.params;
    const { success, data } = await deleteBookById(id);
    if (success) {
      return res.json({ success, data });
    }
    return res.status(500).json({ success: false, message: "Error Delete Book" });
  };
  
  module.exports = {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook    
  };
