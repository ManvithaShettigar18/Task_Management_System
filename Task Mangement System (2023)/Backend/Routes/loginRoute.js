const express = require("express");
const router = express.Router();


const { Login, Logout } = require('../Controller/loginController');


router.route('/Login').post(Login);

router.route('/Logout').post(Logout);
// router.route('/addEmployee').post(addEmployee);
// router.route('/EditEmployee/:id').post(EditEmployee);
// router.route('/EmpDelete/:id').delete(EmpDelete);
// router.route('/AssignTaskEmployee').post(AssignTaskEmployee);
module.exports = router;