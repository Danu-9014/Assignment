const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

dotenv.config();
app.use(express.json());

const bookRouter = require('./routes/books');
app.use("/api",bookRouter);

app.listen(5001, () => {
    console.log("Backend is running");
});
