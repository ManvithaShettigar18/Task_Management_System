const db = require('../Connection');

const displayTask = (req, res) => {
    const sql = "SELECT * FROM task";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}


const addTask = (req, res) => {
    const sql = "INSERT INTO task (`taskName`,`taskDescription`,`taskAssignDate`,`taskEndDate`,`taskPriority`)VALUES(?,?,?,?,?)";
    const values = [

        req.body.taskName,
        req.body.taskDescription,
        req.body.taskAssignDate,
        req.body.taskEndDate,
        req.body.taskPriority

    ]
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Task added Successfully' });
    })
}





const editTask = (req, res) => {
    const sql = "update task set `taskName`=?,`taskDescription`=?, `taskAssignDate`=?, `taskEndDate`=?, `taskPriority`=? where id=?";
    const values = [
        req.body.taskName,
        req.body.taskDescription,
        req.body.taskAssignDate,
        req.body.taskEndDate,
        req.body.taskPriority,
        req.params.id
    ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Employee edited successfully' });
    })
}



const taskDelete = (req, res) => {
    const sql = "DELETE FROM task WHERE id=?";

    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Task deleted successfully' });
    });
}


const singleTasktoEmployee = (req, res) => {
    const sql = "SELECT employee.id as id, task.taskName,task.taskAssignDate,task.taskEndDate,employee.empUid,employee.employeeName FROM  employee  JOIN task ON employee.taskId = task.id";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

const Dashboard = (req, res) => {
    // let id = req.body.id;
    //const sql = `SELECT  employee.id,employee.employeeName,task.taskName,task.taskDescription,task.taskAssignDate,task.taskEndDate,task.taskPriority  FROM  employee  JOIN task where employee.taskId = task.id`;

    // const sql = `SELECT  employee.taskId,task.taskName,GROUP_CONCAT ( employee.employeeName )as "employeeName"  ,task.taskAssignDate,task.taskEndDate,task.taskPriority FROM  employee  JOIN task ON employee.taskId = task.id WHERE task.id="${id}"`;
    // const sql = ` SELECT task.id,task.taskName from task UNION select employee.taskId,employee.id,employee.employeeName from employee where employee.taskId = "${id}" `;
    //const sql = `SELECT employee.id, employee.employeeName task.taskName FROM  employee, task where employee.taskId = task.id`;
    const sql = `SELECT  task.id,task.finalTaskComplete,task.taskCompletedPercentage,task.taskName, GROUP_CONCAT ( employee.employeeName )as "employeeName",task.taskDescription,task.taskAssignDate,task.taskEndDate,task.taskPriority FROM  employee  JOIN task ON employee.taskId = task.id  group by employee.taskId `;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

// const D1 = (req, res) => {
//     const taskId = req.params.taskId;
//     // const sql = `SELECT  employee.id,employee.employeeName,task.taskName,task.taskDescription,task.taskAssignDate,task.taskEndDate,task.taskPriority  FROM  employee   JOIN task ON employee.taskId = task.id `;

//     const sql = `SELECT employee.taskId,employee.id,employee.employeeName  FROM employee where employee.taskId = "${taskId}"`;


//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// }

const emp1task = (req, res) => {
    const id = req.body.id;
    const sql = `SELECT * from employee where id = "${id}"`;
    db.query(sql, (err, data) => {

        const taskIdOfEmp = data[0].taskId;
        console.log("displya", taskIdOfEmp);

        const sql1 = `SELECT * from task where id = "${taskIdOfEmp}"`;
        db.query(sql1, (err, data1) => {


            if (err) return res.json(err);
            return res.json(data1);
        })

        // if (err) return res.json(err);
        // return res.json(data);

    })
}


const taskCompletion = (req, res) => {
    const Id = req.body.id;
    const sql = `update task set taskComplete =1 where id=${Id}`;


    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'flag changed into 1 ' });
    })
}





module.exports = { displayTask, addTask, editTask, taskDelete, singleTasktoEmployee, Dashboard, emp1task, taskCompletion }; 