const db = require('../Connection');
const addNotification = (req, res) => {
    const sql = "INSERT INTO empnotification(`empId`,`Date`,`sentMessage`)VALUES(?,?,?)";
    const values = [

        req.body.empId,
        req.body.Date,
        req.body.sentMessage,

    ]
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Message added successfully' });
    })
}
module.exports = { addNotification }; 