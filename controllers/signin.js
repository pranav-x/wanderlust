//Importing database
const db = require('../database/db');

const signin = (req, res) => {
    let flag = 1
    const { email, password } = req.body;
    db.forEach((user) => {
        if (user.email === email && user.password === password) {    
            
            flag = 0;
            res.status(200).json(`Successfully login ${user.name}`);
            //break;
        }
    });
    if (flag === 1) {
        res.status(400).json("Wrong Credentials");
    }
}

module.exports = signin;