import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem } from '@mui/material';
import { EmpShowData } from "../ApiService";
import { EmpUpdateData } from "../ApiService";

const AddEmpolyee = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {
    //  const [deviceName, setDeviceName] = useState('');
    //const [id, setId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeContact, setEmployeeContact] = useState('');
    const [employeePassword, setEmployeePassword] = useState('');

    const [errorMessage, setErrorMessage] = useState("");

    const [empUid, setEmpUid] = useState('');



    const onCancel = () => {
        setOpen(false);


    }

    const ClearData = () => {

        setEmployeeName('');
        setEmployeeRole('');
        setEmployeeEmail('');
        setEmployeeContact('');
        setEmployeePassword('');
        setEmpUid('');
        setErrorMessage('');
    }





    useEffect(() => {
        // console.log(isAddButton);
        setEmployeeName(editData?.employeeName || '');
        setEmployeeRole(editData?.employeeRole || '');
        setEmployeeEmail(editData?.employeeEmail || '');
        setEmployeeContact(editData?.employeeContact || '');
        setEmployeePassword(editData?.employeePassword || '');
        setEmpUid(editData?.empUid || '');



    }, [editData])

    // if (employeeName.length === 0) {
    //     alert('Invalid Form, First Name can not be empty')
    //     return


    const AddnData = (e) => {
        if (isAddButton === true) {
            EmpShowData({
                employeeName: employeeName,
                employeeRole: employeeRole,
                employeeEmail: employeeEmail,
                employeeContact: employeeContact,
                employeePassword: employeePassword,
                empUid: empUid,


                // deviceTag: deviceTag,
                // deviceLocation: deviceLocation

            }, handleSucess, handleException)
        } else {
            EmpUpdateData({
                id: editData?.id,
                employeeName: employeeName,
                employeeRole: employeeRole,
                employeeEmail: employeeEmail,
                employeeContact: employeeContact,
                employeePassword: employeePassword,
                empUid: empUid,

            }, handleSucess, handleException)

        }

    }
    const handleSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }

    const handleException = (errorObject, errorMass) => {

    }

    function handlePassword(event) {
        let new_pass = event.target.value;
        setEmployeePassword(new_pass);


        // regular expressions to validate password
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (!new_pass.match(lowerCase)) {
            setErrorMessage("Password should contains lowercase letters!");
        } else if (!new_pass.match(upperCase)) {
            setErrorMessage("Password should contain uppercase letters!");
        } else if (!new_pass.match(numbers)) {
            setErrorMessage("Password should contains numbers also!");
        } else if (new_pass.length < 8) {
            setErrorMessage("Password length should be more than 8.");
        }
        else {

            setErrorMessage("Password is strong!");
        }

    }





    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'ADD' : 'UPDATE'} Employee
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: '20px' }} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic1"
                                label="Employee ID "
                                placeholder='Employee ID'
                                variant="outlined"
                                value={empUid} onChange={(e) => setEmpUid(e.target.value)}



                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="Email" placeholder='Email' variant="outlined" type='email'
                                value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic3" label="Name " placeholder='Name' variant="outlined"
                                value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic4" label="Password " placeholder='Password' variant="outlined" type='password'
                                value={employeePassword} onChange={handlePassword} />
                            <div style={{ color: "red" }}> {errorMessage} </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic5" label="Role" select placeholder='Role' variant="outlined" type='text'
                                value={employeeRole} onChange={(e) => setEmployeeRole(e.target.value)} >
                                <MenuItem value='Admin'>
                                    Admin
                                    {/* {option.value} */}
                                </MenuItem>
                                <MenuItem value='Employee'>Employee</MenuItem></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic6" label="Contact(10 digits only) " placeholder='ex:0123456789' variant="outlined" inputProps={{ pattern: "[0-9]{10}" }}
                                value={employeeContact} onChange={(e) => setEmployeeContact(e.target.value)} />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Grid item>
                            <Button sx={{
                                background: "#1976D2", '&:hover': {
                                    backgroundColor: '#393d61',
                                }
                            }} type="submit" variant="contained" disabled={!employeeName || !employeeEmail || !employeeRole || !employeePassword || !employeeContact || !empUid}>
                                {isAddButton ? 'Add' : 'Update'}

                            </Button>
                        </Grid>
                        <Grid item>
                            <Button sx={{
                                background: "#1976D2", '&:hover': {
                                    backgroundColor: '#393d61',
                                }
                            }} onClick={onCancel} variant="contained">Cancel</Button>
                        </Grid>

                    </Grid>
                </DialogActions>
            </form>

        </Dialog>
    )
}

export default AddEmpolyee;
