import React, { useState, useEffect } from 'react';



import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
//import axios from "axios";
import { LoginPage } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import ApplicationStore from '../ApplicationService';
//import { Logintokendata } from '../ApiService';
import { EmpDashboard } from "../ApiService";




//


//

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    //  console.log("login page:")

    //Data 
    //const [login, setLogin] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState('');


    const [employeePassword, setEmployeePassword] = useState('');
    const [loginData, setLoginData] = useState([]);
    // const [token, setToken] = useState([]);
    // const [name, setName] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [role, setRole] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {


    //     // axios.get("http://localhost:3001/device/add")
    //     //     // .then((res) => res.json())
    //     //     .then((data) => setLogin(data.login));
    // }, []);

    // useEffect(() => {
        
    //     // Logintokendata(LogintokendataSuccess, LogintokendataException);

    // }, []);

    // const LogintokendataSuccess = (dataObject) => {
    //     setLogin(dataObject);
    //     // setGridLoading(false);

    // }
    // const LogintokendataException = (errorObject, message) => { }
    // console.log(login);


    const ClearData = () => {

        setEmployeeEmail('');
        setEmployeePassword('');

        // setEmployeePassword('');
        // setEmpUid('');
    }

    const handleSubmit = (event) => {


        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });

        // LoginPage({

        LoginPage({

            employeeEmail: employeeEmail,
            employeePassword: employeePassword,
            // taskAssignDate: taskAssignDate,
            // taskEndDate: taskEndDate,
            // taskPriority: taskPriority,


            // deviceTag: deviceTag,
            // deviceLocation: deviceLocation

        }, handleLogin1Sucess, handleLogin1Exception)
        // const { id } = ApplicationStore().getStorage('userDetails');
        // //console.log("id", id);

        // EmpDashboard({

        //     id: id,
        //     // taskAssignDate: taskAssignDate,
        //     // taskEndDate: taskEndDate,
        //     // taskPriority: taskPriority,


        //     // deviceTag: deviceTag,
        //     // deviceLocation: deviceLocation

        // }, EmpDashboardSucess, EmpDashboardException)

    }

    // const EmpDashboardSucess = (dataObject) => {
    //     console.log("task", dataObject);
    // }
    // const EmpDashboardException = (errorObject, errorMass) => { }





    const handleLogin1Sucess = (dataObject) => {
        // setLoginData(dataObject);
        console.log(dataObject);

        ApplicationStore().setStorage("userDetails", dataObject);

        // console.log(loginData);
        // console.log("login success")
        // const Logname = dataObject.Name
        // console.log("aaa", Logname);
        // var item_value = sessionStorage.getItem("dataObject");
        // console.log("hi", item_value);

        // const name = sessionStorage.setItem('dataObject', (Logname));
        // console.log("hi", name);




        //  setData(dataObject);
        // setOpen(false);
        // setRefreshData(oldValue => !oldValue);
        // ClearData();


        if (dataObject.Role === "Admin") {

            navigate('/Dashboard');



        }
        if (dataObject.Role === "Employee") {




            navigate('/EmpDashboard');





        }

        //  console.log("loginData", loginData);
        // const loginDataObject = {
        //     Name: dataObject.Name,
        //     Role: dataObject.Role,
        // };
        // setLoginData(loginDataObject);
        // console.log(loginData);
        // setLoginData(dataObject);




        // console.log(loginData);
        //console.log("data", dataObject);

        // const nameOftheLoginPerson = dataObject.Name;
        // console.log(nameOftheLoginPerson);
        // const LogedPerson = sessionStorage.setItem('nameOftheLog', JSON.stringify(nameOftheLoginPerson));
        // console.log("data1111", LogedPerson);

    }
    // console.log("hooo", loginData);

    // const nameOftheLoginPerson = data.Name;
    // console.log(nameOftheLoginPerson);
    // const sessionData = JSON.parse(sessionStorage.getItem(login));
    // console.log("session", sessionData);
    const handleLogin1Exception = (errorObject, errorMass) => { }

    const { userDetails } = ApplicationStore().getStorage("userDetails");
    console.log("user-D", userDetails);
    // console.log("hjhkj", hi);
    return (


        < div >

            <Paper elevation={3} square sx={{ width: "30%", marginLeft: 69 }}>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField

                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={employeePassword} onChange={(e) => setEmployeePassword(e.target.value)}

                                />

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                        <Typography> login</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>

                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                    </Container>
                </ThemeProvider>

            </Paper>


        </div >
    );
}