const db = require('../Connection');
const jwt = require('jsonwebtoken');

const secretKey = 'manvitha1811';
const Login = (req, res) => {
    let email = req.body.employeeEmail;
    let password = req.body.employeePassword;





    if (email && password) {

        const sql = `SELECT * FROM employee WHERE employeeEmail = "${email}" `;
        db.query(sql, function (error, data) {

            if (data.length > 0) {

                if (data[0].employeePassword == password) {
                    const Sucess = 1;
                    const Name = data[0].employeeName;
                    const Role = data[0].employeeRole;
                    const id = data[0].id;
                    const Contact = data[0].employeeContact;
                    const token = jwt.sign({ email, Name, Role, Sucess, id, Contact }, secretKey, { expiresIn: '1h' });
                    res.json({ token, email, Name, Role, Sucess, id, Contact });

                }
                else {
                    return res.status(401).json({ message: 'Incorrect Password' });
                }
            }
            else {
                return res.status(401).json({ message: 'Incorrect Email Address' });
            }
            res.end();

        });
    }
    else {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }
};


//Logout
const revokedTokens = new Set();

const Logout = (req, res) => {
    const token = req.body.token;
    console.log("before logout", token);
    if (revokedTokens.has(token)) {
        console.log("if console entered")
        return res.status(401).json({ message: 'Token has already been revoked' });
    }

    // Add the token to the revokedTokens set
    revokedTokens.add(token);
    console.log("else console entered")
    // Send a response to the client to clear the token (client-side logout)
    res.json({ message: 'Logout successful' });


}


module.exports = { Login, Logout }; 