const { Select } = require('@mui/material');
const db = require('../Connection');


const displySubTask = (req, res) => {
    const sql = "SELECT subtask.id,subtask.Name,subtask.Description,task.taskName,subtask.taskId from subtask,task where subtask.taskId=task.id";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

const addSubTask = (req, res) => {
    const sql = "INSERT INTO  subtask(`Name`,`taskId`,`Description`) VALUES(?,?,?)";
    const values = [
        req.body.Name,
        req.body.taskId,
        req.body.Description,

    ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Subtask added successfully' });
    })
}


const updateSubTask = (req, res) => {
    const sql = "update subtask set `Name`=?,`Description`=?, `taskId`=? where id=?";
    const values = [
        req.body.Name,
        req.body.Description,
        req.body.taskId,
        req.params.id
    ]

    db.query(sql, values, (err, data) => {

        if (err) return res.json(err);
        return res.json({ 'message': 'SubTask  updated successfully' });
    })
}


const SubtaskDelete = (req, res) => {
    const sql = "DELETE FROM subtask WHERE id=?";

    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Subtask deleted successfully' });
    });
}

const subtaskasgintoTask = (req, res) => {
    id = req.params.id;
    //const sql = "SELECT subtask.id,subtask.Name,subtask.Description,task.taskName,task.id,employee.employeeName,employee.id from subtask,task,employee where subtask.taskId=task.id and employee.taskId= task.id";
    const sql = `SELECT subtask.id,subtask.Name from subtask where subtask.taskId="${id}"`;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}


const SubtaskasgintoTaskandEmployee = (req, res) => {
    id = req.params.id;
    const sql = `SELECT employee.id,employee.employeeName from employee where employee.taskId="${id}"`;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

const subtaskAllData = (req, res) => {
    id = req.params.id;
    // const sql = "SELECT subtask.id,subtask.Name,subtask.Description,task.taskName,task.id,employee.employeeName,employee.id from subtask,task,employee where subtask.taskId=task.id and subtask.employeeId= employee.id";
    const sql = "SELECT subtask.id,subtask.Name,subtask.Description,task.taskName,subtask.taskId,employee.employeeName ,subtask.employeeId from subtask,task,employee where subtask.taskId=task.id and subtask.employeeId= employee.id";


    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}


const UpdateEmployeeToSubtask = (req, res) => {
    const id = req.params.id
    const sql = `update subtask set employeeId=? where id=${id}`;
    // update subtask set `Name`=?,`Description`=?, `taskId`=? where id=?";
    const values = [

        req.body.employeeId,

    ]

    db.query(sql, values, (err, data) => {

        if (err) return res.json(err);
        return res.json({ 'message': ' employee Id updated successfully to SubTask' });
    })
}


// const EmpDashordwithSubtask = (req, res) => {
//     id = req.body.id;
//     const sql = `SELECT * from subtask where employeeId= "${id}"`;

//     db.query(sql, (err, data) => {
//       if()
//         const taskIdOfEmp = data[0].taskId;
//         const employeeId = data[0].employeeId;
//         console.log("displya", taskIdOfEmp);

//         const sql1 = `SELECT subtask.Name,subtask.description,task.taskName,task.taskDescription,task.taskAssignDate ,task.taskEndDate,task.taskPriority from task,subtask where subtask.employeeId="${employeeId}" and task.id="${taskIdOfEmp}"`;
//         db.query(sql1, (err, data1) => {


//             if (err) return res.json(err);
//             return res.json(data1);
//         })
//     })
// }

// const EmpDashordwithSubtask = (req, res) => {
//     id = req.params.id;
//     const sql = `SELECT taskId from subtask where EXISTS("SELECT subtask.Name,subtask.description,task.taskName,task.taskDescription,task.taskAssignDate,task.taskEndDate,task.taskPriority ,from subtask,task where subtask.taskId=task.id and employee.taskid=task.id and employee.id= "${id}"")`;


//     db.query(sql, (err, data1) => {


//         if (err) return res.json(err);
//         return res.json(data1);
//     })

// }

const EmpDashordwithSubtask = (req, res) => {
    const id = req.params.id;

    const sql = `
        SELECT subtask.id,subtask.taskId,subtask.Name,subtask.description,subtask.startButton,subtask.completeButton,task.taskName,task.taskDescription,task.taskAssignDate,task.taskEndDate,task.taskPriority
        FROM subtask
        INNER JOIN task ON subtask.taskId = task.id
        INNER JOIN employee ON task.id = employee.taskId
      
        
        WHERE employee.id = "${id}"`;

    db.query(sql, (err, data1) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data1);
    });
};




module.exports = { displySubTask, addSubTask, updateSubTask, SubtaskDelete, subtaskasgintoTask, subtaskAllData, SubtaskasgintoTaskandEmployee, UpdateEmployeeToSubtask, EmpDashordwithSubtask }; 