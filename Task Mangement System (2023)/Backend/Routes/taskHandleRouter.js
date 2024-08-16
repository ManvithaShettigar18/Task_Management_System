const express = require("express");
const router = express.Router();

//const { displayTask, addTask, editTask, taskDelete, singleTasktoEmployee, Dashboard, emp1task, taskCompletion } = require('../Controller/taskController');
const { addTaskStartData, UpdatetaskComplete, displyCompletedTask, displyCompletedTaskReport, updateTaskStatus, percentageCalculation, function1, displaysubDashboardData } = require('../Controller/taskHandleController');

//const { add, post, put, remove } = require('../Controller/employeeController');

// router.route('/displayTask').get(displayTask);
router.route('/addTaskStartData').post(addTaskStartData);
router.route('/UpdatetaskComplete/:subtaskId').post(UpdatetaskComplete);

router.route('/displyCompletedTask').get(displyCompletedTask);
router.route('/displyCompletedTask/:taskName').get(displyCompletedTaskReport);
// router.route('/editTask/:id').post(editTask);
// router.route('/taskDelete/:id').delete(taskDelete);
// router.route('/singleTasktoEmployee').get(singleTasktoEmployee);

// //router.route('/Dashboard/:taskId').post(Dashboard);
router.route('/updateTaskStatus').get(updateTaskStatus);

router.route('/percentageCalculation').get(percentageCalculation);

router.route('/calculateSubtaskPercentages').post(function1);


router.route('/displaysubDashboardData').post(displaysubDashboardData);
// router.route('/emp1task').post(emp1task)
// router.route('/taskCompletion').post(taskCompletion)
// //router.route('/D1/:taskId').get(D1);


// //router.route('/addEmployee').get(addEmployee);

// // router.route('/created').post(post);
// // router.route('/updated').post(put);
// // router.route('/AddDevice').post(remove);


module.exports = router;