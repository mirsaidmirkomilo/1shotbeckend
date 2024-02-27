const express = require('express');
require('dotenv').config();
const { default: mongoose, connect } = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/users', usersRouter);

const PORT = process.env.PORT || 8000

mongoose.set("strictQuery", true)

app.listen(PORT, () => console.log("SERVER:", `http://localhost:${PORT}/users`))

const StartServer = async () => {
    try{
        await mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("OK"))
        .catch(() => console.log("ERR"))

    } catch (error) {
        console.log(error);
    }
}

StartServer()