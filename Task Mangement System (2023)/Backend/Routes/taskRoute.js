const express = require("express");
const router = express.Router();

const { displayTask, addTask, editTask, taskDelete, singleTasktoEmployee, Dashboard, emp1task, taskCompletion } = require('../Controller/taskController');

//const { add, post, put, remove } = require('../Controller/employeeController');

router.route('/displayTask').get(displayTask);
router.route('/addTask').post(addTask);
router.route('/editTask/:id').post(editTask);
router.route('/taskDelete/:id').delete(taskDelete);
router.route('/singleTasktoEmployee').get(singleTasktoEmployee);

//router.route('/Dashboard/:taskId').post(Dashboard);
router.route('/Dashboard').get(Dashboard);

router.route('/emp1task').post(emp1task)
router.route('/taskCompletion').post(taskCompletion)
//router.route('/D1/:taskId').get(D1);


//router.route('/addEmployee').get(addEmployee);

// router.route('/created').post(post);
// router.route('/updated').post(put);
// router.route('/AddDevice').post(remove);


module.exports = router;