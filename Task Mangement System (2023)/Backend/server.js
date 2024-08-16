const express = require('express');

const cors = require('cors')

const app = express();
''//app.use(express.static('C:/xampp/htdocs/RDLproject/backend/Controller/images'));

// const fileUpload = require('express-fileupload');
// const path = require('path');
// // app.use(fileUpload({
//     limits: {
//         fileSize: 10000000,
//     },
//     abortOnLimit: true,

// }));
// app.use(express.json());
// app.use(fileUpload({
//     limits: {
//         fileSize: 10000000,
//     },
//     abortOnLimit: true,

// }));

// // Serve static files (optional)
// app.use(express.static(path.join('C:/Users/Project/client/public/Image/')));





// const bodyParser = require('body-parser');
// //const app1 = bodyParser();
// app.use(bodyParser.json());

app.use(express.json());
//const mysql = require("mysql")
//const dotenv = require('dotenv')

app.use(cors());


const Employee = require('./Routes/employeeRoute');
const Task = require('./Routes/taskRoute');
const Login = require('./Routes/loginRoute');

const subTask = require('./Routes/subTaskRouter');
const taskHandle = require('./Routes/taskHandleRouter');
const empnotification = require('./Routes/empNotificationRouter');






app.use('/Employee', Employee);
app.use('/Task', Task);
app.use('/Login', Login);
app.use('/empnotification', empnotification);

app.use('/subTask', subTask);
app.use('/taskHandle', taskHandle);






app.listen(3001, () => {
    console.log("listening");
})