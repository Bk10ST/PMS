const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RegisteredModel = require('./models/Register')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/PMS')

app.post('/register', (req, res) => {
    RegisteredModel.create(req.body)
        .then(register => register.json(register))
        .catch(err => console.log(err));
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json('Login Success');
            } else {
                res.json('Password incorrect');
            }
        } else {
            res.json('No User Found !!');
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.listen(8080)