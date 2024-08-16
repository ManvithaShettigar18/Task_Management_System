const express = require("express");
const router = express.Router();

const { addNotification } = require('../Controller/empNotificationController');


// router.route('/displyEmployee').get(displyEmployee);

// router.route('/displyemployeesOnly').get(displyemployeesOnly);

router.route('/addNotification').post(addNotification);
// router.route('/EditEmployee/:id').post(EditEmployee);
// router.route('/EmpDelete/:id').delete(EmpDelete);
// router.route('/AssignTaskEmployee').post(AssignTaskEmployee);






module.exports = router;