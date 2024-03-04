const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/Register');

const app = express();

app.use(cors());
app.use(express.json());

const connection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/PMS');
        console.log('Connection established');
    } catch (error) {
        console.log(error);
    }
}
connection();

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(register => register.json(register))
        .catch(err => console.log(err));
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email && !password) {
        res.status(403).json({ message: 'Please enter your email address and password' });
    }
    try {
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json({ data: user })
            } else {
                res.status(403).json('Password incorrect');
            }
        } else {
            res.json('No User Found !!');
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.listen(8080)