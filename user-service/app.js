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

const userRouter = require('./routes/users');
app.use("/api",userRouter);

app.listen(5000, () => {
    console.log("Backend is running");
});
