const db = require('../Connection');
const cron = require('node-cron');

// const addTaskStartData = (req, res) => {
//     const status = "On-Process";
//     // const startButtonPressed = "true";
//     // const completeButtonPressed = "false";
//     const sql = `INSERT INTO taskhandle (taskId,subtaskId,employeeId,empName,taskAssignDate,assignedTaskEndDate,taskStartedDate,status)VALUES(?,?,?,?,?,?,?,"${status}")`;
//     const values = [

//         req.body.taskId,
//         req.body.subtaskId,
//         req.body.employeeId,
//         req.body.empName,
//         req.body.taskAssignDate,
//         req.body.assignedTaskEndDate,
//         req.body.taskStartedDate,


//     ]
//     db.query(sql, values, (err, data) => {
//         const subtaskId = data.subtaskId;
//         // const startButton = "true";
//         const sql1 = `update subtask set startButton="true" where id="${subtaskId}"`;

//         db.query(sql1, (err1, data) => {
//             if (err1) return res.json(err1);
//             return res.json({ 'message': 'SubTask started Successfully' });
//         })
//     })
// }


const addTaskStartData = (req, res) => {
    const status = "On-Process";
    const sql = "INSERT INTO taskhandle (taskId, subtaskId, employeeId, empName, taskAssignDate, assignedTaskEndDate, taskStartedDate, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
        req.body.taskId,
        req.body.subtaskId,
        req.body.employeeId,
        req.body.empName,
        req.body.taskAssignDate,
        req.body.assignedTaskEndDate,
        req.body.taskStartedDate,
        status
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json(err);
        }

        const insertedSubtaskId = req.body.subtaskId;
        const sql1 = `UPDATE subtask SET startButton = "true",completeButton="false" WHERE id = ?`;

        db.query(sql1, [insertedSubtaskId], (err1, data1) => {
            if (err1) {
                return res.json(err1);
            }
            return res.json({ message: 'SubTask started Successfully' });
        });
    });
};







// const UpdatetaskComplete = (req, res) => {
//     const id = req.params.id;
//     const CompletedDAte = req.body.taskCompletedDate;
//     const StatusCompleted = "Completed";
//     const StatusDelay = "Delay";

//     const sql = `SELECT * from taskhandle where id=${id}`;


//     db.query(sql, (err, data) => {
//         const TaskEndDate = data[0].assignedTaskEndDate;
//         if (CompletedDAte <= TaskEndDate) {

//             const sql1 = `update taskhandle set taskCompletedDate=${CompletedDAte},status=${StatusCompleted} where id=${id}`;
//         } else {
//             const sql2 = `update taskhandle set taskCompletedDate=${CompletedDAte},status=${StatusDelay} where id=${id}`;
//         }
//         db.query(sql1, sql2, (err, data) => {

//             if (err) return res.json(err);
//             return res.json({ 'message': ' completd Task Sucessfully ' });
//         })
//     })
// }
// const UpdatetaskComplete = (req, res) => {
//     const id = req.body.subtaskId;
//     const CompletedDate = new Date(req.body.taskCompletedDate);
//     const StatusCompleted = "Completed";
//     const StatusDelay = "Delay";

//     const sql = `SELECT * FROM taskhandle WHERE id=${id}`;

//     db.query(sql, (err, data) => {
//         if (err) {
//             return res.json(err);
//         }

//         const TaskEndDate = new Date(data[0].assignedTaskEndDate);
//         console.log("End-Date", TaskEndDate);
//         console.log("Completed-Date", CompletedDate);

//         let statusSql;

//         if (TaskEndDate >= CompletedDate) {
//             const Complete = CompletedDate.toISOString().slice(0, 10);
//             console.log("comp", Complete);
//             statusSql = `UPDATE taskhandle SET taskCompletedDate='${Complete}', status='${StatusCompleted}' WHERE id=${id}`;
//         } else {
//             const Complete1 = CompletedDate.toISOString().slice(0, 10);
//             console.log("comp", Complete1);
//             statusSql = `UPDATE taskhandle SET taskCompletedDate='${Complete1}', status='${StatusDelay}' WHERE id=${id}`;
//         }

//         db.query(statusSql, (err, result) => {
//             if (err) {
//                 return res.json(err);
//             }
//             return res.json({ message: 'Task updated successfully.' });
//         });
//     });
// };


const UpdatetaskComplete = (req, res) => {
    const subtaskId = req.params.subtaskId;

    const CompletedDate = req.body.taskCompletedDate;




    const sql = `SELECT * FROM taskhandle WHERE subtaskId = ${subtaskId}`;
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json(err);

        }




        const TaskEndDate = data[0].assignedTaskEndDate;
        console.log("End-Date", TaskEndDate);
        console.log("Completed-Date", CompletedDate);

        let statusSql;
        let status;
        if (TaskEndDate >= CompletedDate) {
            status = 'Completed';
        } else {
            status = 'Delay';
        }

        statusSql = `UPDATE taskhandle SET taskCompletedDate ='${CompletedDate}', status ='${status}' WHERE subtaskId =${subtaskId}`;


        db.query(statusSql, (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error1", err });

            }




            const sql1 = `UPDATE subtask SET completeButton = 'true' WHERE id =${subtaskId}`;


            db.query(sql1, (err1, data1) => {
                if (err1) {
                    return res.status(500).json(err1);
                }
                return res.json({ message: 'SubTask completed Successfully', data1 });
            });
        });
    });
};

// Export the function for use in your application






const displyCompletedTask = (req, res) => {
    const sql = "SELECT taskhandle.id,task.taskName,subtask.Name,taskhandle.employeeId,taskhandle.empName,taskhandle.taskAssignDate,taskhandle.assignedTaskEndDate,taskhandle.taskStartedDate,taskhandle.taskCompletedDate,taskhandle.status FROM task,subtask,taskhandle where taskhandle.taskId=task.id and taskhandle.subtaskId=subtask.id ";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

const displyCompletedTaskReport = (req, res) => {
    const taskName = req.params.taskName
    let sql;
    if (taskName === "All") {

        sql = "SELECT taskhandle.id,task.taskName,subtask.Name,taskhandle.employeeId,taskhandle.empName,taskhandle.taskAssignDate,taskhandle.assignedTaskEndDate,taskhandle.taskStartedDate,taskhandle.taskCompletedDate,taskhandle.status FROM task,subtask,taskhandle where taskhandle.taskId=task.id and taskhandle.subtaskId=subtask.id ";
    } else {

        sql = "SELECT taskhandle.id,task.taskName,subtask.Name,taskhandle.employeeId,taskhandle.empName,taskhandle.taskAssignDate,taskhandle.assignedTaskEndDate,taskhandle.taskStartedDate,taskhandle.taskCompletedDate,taskhandle.status FROM task,subtask,taskhandle where task.taskName=? AND taskhandle.taskId=task.id and taskhandle.subtaskId=subtask.id ";
    }
    db.query(sql, [taskName], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}








// Define a function to check and update task statuses
function updateTaskStatus() {

    const checkQuery = `
      UPDATE task
      SET finalTaskComplete = 'Completed'
      WHERE id IN (
        SELECT taskId
        FROM taskHandle
        GROUP BY taskId
        HAVING COUNT(*) = SUM(CASE WHEN status = 'Completed' OR status = 'Delay' THEN 1 ELSE 0 END)
      )
    `;

    db.query(checkQuery, (err, results) => {
        if (err) {
            console.error('Error updating task status:', err);
        } else {
            console.log('Task statuses updated successfully.');
        }
    });
}

// Schedule the cron job to run the updateTaskStatus function (e.g., every minute)
cron.schedule('* * * * *', () => {
    console.log('Running task status update...');
    updateTaskStatus();
});




function percentageCalculation() {
    // const subtaskQuery1 = `
    //     SELECT

    //         taskHandle.taskId,
    //         CASE
    //             WHEN COUNT(taskHandle.subtaskId) = 0 THEN 100
    //             ELSE (SUM(CASE WHEN taskHandle.status = 'complete' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
    //         END AS task_completion_percentage

    //     GROUP BY
    //         taskHandle.taskId
    // `;



    //     const subtaskQuery1 = `SELECT 
    //   taskId,IFNULL((SUM(CASE WHEN status = 'Complete' THEN 1 ELSE 0 END) / COUNT(subtaskId)) * 100, 0) AS completion_percentage
    // FROM taskHandle GROUP BY 
    //     taskId`;

    const subtaskQuery1 = ` 
     SELECT 
    subtask.taskId,
    
    IFNULL((SUM(CASE WHEN taskHandle.status = 'Completed' OR taskHandle.status = 'Delay'  THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100, 0) AS completion_percentage
FROM 
    subtask
LEFT JOIN 
taskHandle ON subtask.taskId = taskHandle.taskId
GROUP BY 
    subtask.taskId`;



    db.query(subtaskQuery1, (error, results) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log("Task Completion Percentages:");
        results.forEach((row) => {
            console.log(`Task ID: ${row.taskId}, Completion Percentage: ${row.completion_percentage}`);
        });


        // Assuming you have a task table with a taskId column, update the completion_percentage for each task.
        results.forEach((row) => {
            const updateQuery = `UPDATE task SET taskCompletedPercentage = ? WHERE id = ?`;

            db.query(updateQuery, [row.completion_percentage, row.taskId], (updateError, updateResults) => {
                if (updateError) {
                    console.error(updateError);
                    return;
                }

                console.log(`Updated completion percentage for Task ID ${row.taskId} to ${row.completion_percentage}%`);
            });
        });







    });
}


cron.schedule('* * * * *', () => {
    console.log('Percentage calculation of Each Task...');
    percentageCalculation();
});


// Call the function to calculate percentages
// percentageCalculation();




// function calculateSubtaskPercentages(callback) {

//     const sql = `
//         SELECT
//             task.id,task.taskName,

//             (
//                 (SUM(CASE WHEN taskHandle.status = 'Completed' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
//             ) AS completed_percentage,
//             (
//                 (SUM(CASE WHEN taskHandle.status = 'On-Process' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
//             ) AS on_process_percentage,
//             (
//                 (SUM(CASE WHEN taskHandle.status = 'Delay' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
//             ) AS delay_percentage
//         FROM
//             task
//         LEFT JOIN
//             taskHandle ON task.id =taskHandle.taskId
//         GROUP BY
//             task.id;
//     `;

//     db.query(sql, (err, results) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }

//         callback(null, results);
//     });
// }

// calculateSubtaskPercentages((err, results) => {
//     if (err) {
//         console.error('Error:', err);
//         return;
//     }

//     console.log('Task Subtask Percentages:');
//     results.forEach((row) => {
//         console.log(`Task ID: ${row.id}, Task Name: ${row.taskName}`);
//         console.log(`Completed Percentage: ${row.completed_percentage}%`);
//         console.log(`On Process Percentage: ${row.on_process_percentage}%`);
//         console.log(`Delay Percentage: ${row.delay_percentage}%`);
//         console.log('--------------------------');
//     });


// });

function calculateSubtaskPercentages(taskId, callback) {
    const sql = `
        SELECT
            (
                (SUM(CASE WHEN taskHandle.status = 'Completed' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
            ) AS completed_percentage,
            (
                (SUM(CASE WHEN taskHandle.status = 'on-Process' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
            ) AS on_process_percentage,
            (
                (SUM(CASE WHEN taskHandle.status = 'Delay' THEN 1 ELSE 0 END) / COUNT(taskHandle.subtaskId)) * 100
            ) AS delay_percentage
        FROM
        taskHandle
        WHERE
        taskHandle.taskId = ?;
    `;

    db.query(sql, [taskId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }

        callback(null, results[0]); // Assuming there's only one result row
    });
}

// Example usage for a specific task ID (replace with your actual task ID)
function function1(req, res) {

    const taskId = req.body.taskId;
    //console.log("hhhhhhhhhhhhhhiiiiiiiiiiiiiiiiii");
    console.log("taskid...", taskId);
    calculateSubtaskPercentages(taskId, (err, percentages) => {
        if (err)
            return res.json(err);
        return res.json(percentages);
        console.log("percentage", percentages);




        // console.log('Task Subtask Percentages:');
        // console.log(`Completed Percentage: ${percentages.completed_percentage}%`);
        // console.log(`On Process Percentage: ${percentages.on_process_percentage}%`);
        // console.log(`Delay Percentage: ${percentages.delay_percentage}%`);


    });
};

// function displaysubDashboardData(req, res) {
//     const taskId = req.params.taskId;
//     const sql = `SELECT subtask.Name,taskHandle.status FROM subtask, taskHandle subtask.id = taskHandle.subtaskId WHERE taskHandle.taskId = ${taskId}`;
//     db.query(sql, (err, data) => {
//         if (err) {
//             return res.status(500).json(err);

//         }
//     });
// }

function displaysubDashboardData(req, res) {
    const taskId = req.body.taskId;
    console.log("taskId", taskId);
    const sql = `
        SELECT subtask.id,subtask.Name,taskHandle.status,taskHandle.taskAssignDate,taskHandle.assignedTaskEndDate,taskHandle.taskStartedDate,taskHandle.taskCompletedDate
        FROM subtask 
        JOIN taskHandle ON subtask.id = taskHandle.subtaskId 
        WHERE taskHandle.taskId =${taskId} `;

    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }

        // Handle the data you retrieved from the database (e.g., send it as a response)
        res.json(data);
        console.log("databackend", data)
    });
}





module.exports = { addTaskStartData, UpdatetaskComplete, displyCompletedTask, displyCompletedTaskReport, updateTaskStatus, percentageCalculation, function1, displaysubDashboardData }; 