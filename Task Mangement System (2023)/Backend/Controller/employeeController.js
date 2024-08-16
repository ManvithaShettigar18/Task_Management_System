const db = require('../Connection');

const displyEmployee = (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}

const displyemployeesOnly = (req, res) => {
    const sql = "SELECT * FROM employee where employeeRole='Employee'";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

const addEmployee = (req, res) => {
    const sql = "INSERT INTO employee (`employeeName`,`employeeRole`,`employeeEmail`,`employeePassword`,`employeeContact`,`empUid`)VALUES(?,?,?,?,?,?)";
    const values = [

        req.body.employeeName,
        req.body.employeeRole,
        req.body.employeeEmail,
        req.body.employeePassword,
        req.body.employeeContact,
        req.body.empUid

    ]
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Employee added successfully' });
    })
}
// const addEmployee = (req, res) => {
//     let data = [
//         req.body[0].employeeName,
//         req.body[0].employeeAge,
//         req.body[0].employeeEmail,
//         req.body[0].employeePassword,
//         req.body[0].employeeContact,
//         req.body[0].empUid,
//         // connection.escape(req.body[0].item),
//         // connection.escape(req.body[0].category),
//         // connection.escape(req.body[0].quantity),
//         // connection.escape(req.body[0].price),
//         // connection.escape(req.body[0].closed)
//     ];

//     db.query('INSERT INTO `employee` (`employeeName`, `employeeAge`, `employeeEmail`, `employeePassword`, `employeeContact`, `empUid`) VALUES (?)', [data], (error, results, fields) => {
//         if (error) throw error;
//         console.log(results);
//     });
// }








const EditEmployee = (req, res) => {
    const sql = "update employee set `employeeName`=?, `employeeEmail`=?, `employeePassword`=?,`employeeRole`=?, `employeeContact`=?,`empUid`=? where id=?";
    const values = [
        req.body.employeeName,
        req.body.employeeEmail,
        req.body.employeePassword,
        req.body.employeeRole,
        req.body.employeeContact,
        req.body.empUid,
        req.params.id
    ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Employee edited successfully' });
    })
}

// const EditEmployee = (req, res) => {
//     const sql = "update employee set `employeeName`=?,`deviceTag`=?, `deviceLocation`=? where id=?";
//     const values = [
//         req.body.deviceName,
//         req.body.deviceTag,
//         req.body.deviceLocation,
//         req.params.id
//     ]
//     db.query(sql, values, (err, data) => {
//         if (err) return res.json(err);
//         return res.json({ 'message': 'device updated successfully' });
//     })
// }


const EmpDelete = (req, res) => {
    const sql = "DELETE FROM employee WHERE id=?";

    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'device deleted successfully' });
    });
}


const AssignTaskEmployee = (req, res) => {
    const sql = "update employee set `taskId`=?  WHERE id=?";
    const values = [

        req.body.taskId,

        req.body.id
    ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Taskid updated successfully' });
    });
}


const DisplymyData = (req, res) => {
    const empId = req.params.id;
    const sql = `SELECT * FROM employee WHERE id="${empId}"`;

    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}

const RemainingEmployee = (req, res) => {
    const sql = `SELECT * FROM employee WHERE employeeRole = "Employee" AND taskId IS NULL`;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};




module.exports = { displyEmployee, addEmployee, EditEmployee, EmpDelete, AssignTaskEmployee, displyemployeesOnly, DisplymyData, RemainingEmployee }; 