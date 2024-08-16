import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, Select } from '@mui/material';
import { EmpShowData, SubTask } from "../ApiService";
import { EmpUpdateData, TaskNameData, SubtaskasgintoTask, SubtaskasgintoTaskandEmployee, UpdateEmployeeToSubtask, ChangeEmployeeinSubtask } from "../ApiService";

const AddEmpolyee = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {
    //  const [deviceName, setDeviceName] = useState('');
    //const [id, setId] = useState('');
    const [task, setTask] = useState('');
    const [emp, setEmp] = useState('');
    const [subTask, setSubTask] = useState('');



    const [taskasgindata, setTaskasgindata] = useState([]);
    const [subTaskList, setSubTaskList] = useState([]);
    const [empList, setEmpList] = useState([]);


    const [empUid, setEmpUid] = useState('');



    const onCancel = () => {
        setOpen(false);


    }

    const ClearData = () => {

        setTask('');
        setEmp('');
        setSubTask('');
    }





    useEffect(() => {
        // console.log(isAddButton);
        setTask(editData?.taskId || '');
        setSubTask(editData?.id || '');
        setEmp(editData?.employeeId || '');





    }, [editData])

    // if (employeeName.length === 0) {
    //     alert('Invalid Form, First Name can not be empty')
    //     return


    useEffect(() => {
        TaskNameData(TaskNameData1Success, TaskNameData1Exception);



    }, []);

    const TaskNameData1Success = (dataObject) => {
        setTaskasgindata(dataObject);

        // setGridLoading(false);


    }
    const TaskNameData1Exception = (errorObject, message) => { }
    console.log("TaskName", taskasgindata);








    const AddnData = (e) => {
        if (isAddButton === true) {
            UpdateEmployeeToSubtask({
                id: subTask,
                employeeId: emp,




            }, UpdateEmployeeToSubtaskhandleSucess, UpdateEmployeeToSubtaskhandleException)
        } else {
            ChangeEmployeeinSubtask({
                id: editData?.id,
                employeeId: emp,


            }, ChangeEmployeeinSubtaskhandleSucess, ChangeEmployeeinSubtaskhandleException)

        }

    }
    const UpdateEmployeeToSubtaskhandleSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }

    const UpdateEmployeeToSubtaskhandleException = (errorObject, errorMass) => {

    }

    const ChangeEmployeeinSubtaskhandleSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }

    const ChangeEmployeeinSubtaskhandleException = (errorObject, errorMass) => {

    }

    const onSelectedItem1 = (e) => {
        setTask(e.target.value)



        SubtaskasgintoTask({ id: e.target.value }, SubtaskasgintoTaskSucess, SubtaskasgintoTaskException);
        SubtaskasgintoTaskandEmployee({ id: e.target.value }, SubtaskasgintoTaskandEmployeeSucess, SubtaskasgintoTaskandEmployeeException);
    }
    console.log("taskId", task);
    const SubtaskasgintoTaskSucess = (dataObject) => {
        setSubTaskList(dataObject)

    }
    console.log("subtaskName", subTaskList);
    const SubtaskasgintoTaskException = (errorObject, errorMass) => {

    }


    console.log("subtaskId", subTask);
    const SubtaskasgintoTaskandEmployeeSucess = (dataObject) => {
        setEmpList(dataObject)

    }
    console.log("employyeList", empList);
    const SubtaskasgintoTaskandEmployeeException = (errorObject, errorMass) => {

    }





    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '42%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'ADD' : 'UPDATE'} Employee
                </DialogTitle>
                <DialogContent>
                    <Grid container xs={12} spacing={2}>
                        <Grid item xs={12}></Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth select required id="outlined-basic2" label="Task" placeholder='Task' variant="outlined" type='email'
                                value={task} onChange={(e) => onSelectedItem1(e)} >

                                {

                                    taskasgindata.map((data) =>

                                        <MenuItem key={data.taskName} value={data.id}>{data.taskName}</MenuItem>,




                                    )

                                }


                            </TextField>
                        </Grid>
                        {/* <Grid></Grid> */}
                        <Grid item xs={12}>
                            <TextField select fullWidth required id="outlined-basic3" label="SubTask " placeholder='SubTask' variant="outlined"
                                value={subTask} onChange={(e) => setSubTask(e.target.value)} >



                                {

                                    subTaskList.map((data) =>

                                        <MenuItem key={data.id} value={data.id}>{data.Name}</MenuItem>,




                                    )

                                }




                            </TextField>



                        </Grid>
                        {/* <Grid></Grid> */}
                        <Grid item xs={12}>
                            <TextField fullWidth select required id="outlined-basic5" label="Employee" placeholder='Employee' variant="outlined" type='text'
                                value={emp} onChange={(e) => setEmp(e.target.value)} >

                                {

                                    empList.map((data) =>

                                        <MenuItem key={data.id} value={data.id}>{data.employeeName}</MenuItem>,




                                    )

                                }

                            </TextField>
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
                            }} type="submit" variant="contained" disabled={!task || !emp || !subTask}>
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
