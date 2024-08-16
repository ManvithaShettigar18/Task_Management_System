const express = require("express");
const router = express.Router();

const { displySubTask, addSubTask, updateSubTask, SubtaskDelete, subtaskasgintoTask, subtaskAllData, SubtaskasgintoTaskandEmployee, UpdateEmployeeToSubtask, EmpDashordwithSubtask } = require('../Controller/subTaskController');


router.route('/displySubTask').get(displySubTask);


router.route('/addSubTask').post(addSubTask);
router.route('/updateSubTask/:id').post(updateSubTask);

router.route('/SubtaskDelete/:id').delete(SubtaskDelete);


router.route('/subtaskasgintoTask/:id').post(subtaskasgintoTask);
router.route('/SubtaskasgintoTaskandEmployee/:id').post(SubtaskasgintoTaskandEmployee);


router.route('/subtaskAllData').get(subtaskAllData);


router.route('/UpdateEmployeeToSubtask/:id').post(UpdateEmployeeToSubtask);

router.route('/EmpDashordwithSubtask/:id').post(EmpDashordwithSubtask)


module.exports = router;