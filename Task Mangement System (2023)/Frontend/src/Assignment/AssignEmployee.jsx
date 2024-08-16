import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, MenuItem, TextField, } from '@mui/material';
// import { EmpShowData } from "../ApiService";
// import { EmpUpdateData } from "../ApiService";
import { EmpListData, TaskListData, EmpUpdate } from "../ApiService";

const AddEmpolyee = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {
    //  const [deviceName, setDeviceName] = useState('');
    //const [id, setId] = useState('');



    //empid is employeeid  which move from one table to other
    const [taskName, setTaskName] = useState('');

    const [employeeList, setEmployeeList] = useState([]);
    const [TaskList, setTaskList] = useState([]);
    const [Task, setTask] = useState('');




    const onCancel = () => {
        setOpen(false);


    }


    const AddnData = (e) => {
        EmpUpdate({
            taskId: taskName,
            id: Task,
        }, handleTaskUpdateSucess, handleTaskUpdateException)


    }
    const handleTaskUpdateSucess = (dataObject) => {

        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        // ClearData();
    }
    const handleTaskUpdateException = (errorObject, message) => {
        console.log(message)
    }





    useEffect(() => {
        EmpListData(EmpListDataSuccess, EmpListDataException);
        TaskListData(TaskListDataSucess, TaskListDataException);
    }, []);

    const EmpListDataSuccess = (dataObject) => {
        setEmployeeList(dataObject);
    }
    const EmpListDataException = (errorObject, message) => { }

    const TaskListDataSucess = (dataObject) => {
        setTaskList(dataObject);
    }
    const TaskListDataException = (errorObject, message) => {

    }










    // const AddnData = (e) => {
    //     if (isAddButton === true) {
    //         EmpShowData({
    //             employeeName: employeeName,
    //             employeeAge: employeeAge,
    //             employeeEmail: employeeEmail,
    //             employeeContact: employeeContact,
    //             employeePassword: employeePassword,
    //             empUid: empUid,


    //             // deviceTag: deviceTag,
    //             // deviceLocation: deviceLocation

    //         }, handleSucess, handleException)
    //     } else {
    //         EmpUpdateData({
    //             id: editData?.id,
    //             employeeName: employeeName,
    //             employeeAge: employeeAge,
    //             employeeEmail: employeeEmail,
    //             employeeContact: employeeContact,
    //             employeePassword: employeePassword,
    //             empUid: empUid,
    //         }, handleSucess, handleException)

    //     }

    // }
    // const handleSucess = (dataObject) => {
    //     setOpen(false);
    //     setRefreshData(oldValue => !oldValue);
    //     ClearData();
    //     console.log(dataObject)

    // }

    // const handleException = (errorObject, errorMass) => {

    // }




    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'Assign Employee' : 'Update Assign'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: '20px' }} >


                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormControl id="1" fullWidth sx={{ m: 1, ml: 0 }} value={taskName} >
                                {/* <TextField fullWidth required id="outlined-basic" label="Priority " placeholder='Priority' variant="outlined" /> */}
                                <TextField
                                    id="outlined-select-2"
                                    select
                                    defaultValue=""
                                    label="select Task"
                                    placeholder='Task'

                                    // sx={{ pl: 0 }}
                                    // defaultValue="EUR"
                                    // helperText="Assign  Task"

                                    onChange={(e) => setTaskName(e.target.value)}
                                >

                                    {TaskList.map((data) => {
                                        return (
                                            <MenuItem value={data.id} >{data.taskName}</MenuItem>
                                        );
                                    })}




                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormControl id="1" fullWidth sx={{ m: 1, ml: 0 }} value={Task}>
                                {/* <TextField fullWidth required id="outlined-basic" label="Priority " placeholder='Priority' variant="outlined" /> */}
                                <TextField
                                    id="outlined-select-2"
                                    select
                                    defaultValue=""
                                    label="select Employee"
                                    key="ttask"

                                    onChange={(e) => setTask(e.target.value)}
                                >


                                    {employeeList.map((data) => {
                                        return (
                                            <MenuItem value={data.id} >{data.employeeName}</MenuItem>
                                        );
                                    })}


                                </TextField>
                            </FormControl>
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
                            }} type="submit" variant="contained" disabled={!taskName || !Task}>
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
