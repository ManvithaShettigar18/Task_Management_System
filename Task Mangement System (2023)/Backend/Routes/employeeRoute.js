const express = require("express");
const router = express.Router();

const { displyEmployee, addEmployee, EditEmployee, EmpDelete, AssignTaskEmployee, displyemployeesOnly, DisplymyData, RemainingEmployee } = require('../Controller/employeeController');
//const { add, post, put, remove } = require('../Controller/employeeController');

router.route('/displyEmployee').get(displyEmployee);

router.route('/displyemployeesOnly').get(displyemployeesOnly);

router.route('/addEmployee').post(addEmployee);
router.route('/EditEmployee/:id').post(EditEmployee);
router.route('/EmpDelete/:id').delete(EmpDelete);
router.route('/AssignTaskEmployee').post(AssignTaskEmployee);


router.route('/DisplymyData/:id').post(DisplymyData);


router.route('/RemainingEmployee').get(RemainingEmployee);



//router.route('/singlEmployee').get(singlEmployee);





// router.route('/AssignEmployee').get(AssignEmployee);




// router.route('/created').post(post);
// router.route('/updated').post(put);
// router.route('/AddDevice').post(remove);


module.exports = router;