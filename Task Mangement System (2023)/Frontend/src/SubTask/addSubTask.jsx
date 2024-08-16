import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, FormControl } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
// import { styled } from '@mui/system';
//import ApplicationStore from '../ApplicationService';

import { AddSubTask, TaskNameData, SubTaskUpdate } from '../ApiService';
//import { TaskUpdateData } from "../ApiService";

//import { Password } from '@mui/icons-material';
// import { TextareaAutosize } from '@mui/base';


//for Date Picker
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Box } from '@mui/icons-material';



const AddEmpolyee = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {


    // const [selected, setSelected] = useState('');



    const [taskId, setTaskId] = useState('');
    const [subTaskDescription, setSubtaskDescription] = useState('');
    const [subTaskName, setSubTaskName] = useState('');





    const [taskNameList, setTaskNameList] = useState([]);

    // const changeSelectOption = (event) => {
    //     setSelected(event.target.value);
    // };



    const onCancel = () => {
        setOpen(false);

    }
    const ClearData = () => {

        setTaskId('');
        setSubtaskDescription('');
        setSubTaskName('');

    }

    useEffect(() => {
        TaskNameData(TaskNameDataSuccess, TaskNameDataException);
        // setTaskId(editData?.id || '');
    }, []);

    const TaskNameDataSuccess = (dataObject) => {
        setTaskNameList(dataObject);

    }
    const TaskNameDataException = (errorObject, message) => { }



    useEffect(() => {
        // console.log("editDataeditData".editData)
        setTaskId(editData?.taskId || '');
        // console.log(editData?.taskId);
        setSubtaskDescription(editData?.Description || '');
        // console.log(editData?.Description);
        setSubTaskName(editData?.Name || '');


    }, [editData])
    const AddnData = (e) => {
        if (isAddButton === true) {
            AddSubTask({
                taskId: taskId,
                Description: subTaskDescription,
                Name: subTaskName,
                // taskEndDate: taskEndDate,
                // taskPriority: taskPriority,


                // deviceTag: deviceTag,
                // deviceLocation: deviceLocation

            }, AddSubTaskSucess, AddSubTaskException)
        } else {
            SubTaskUpdate({
                id: editData?.id,
                taskId: taskId,
                Description: subTaskDescription,
                Name: subTaskName,


            }, SubTaskUpdateSucess, SubTaskUpdateException)

        }


    }

    const AddSubTaskSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }
    const AddSubTaskException = (errorObject, errorMass) => {

    }

    const SubTaskUpdateException = (errorObject, errorMass) => {

    }
    const SubTaskUpdateSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }



    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'ADD SubTask' : 'UPDATE SubTask  '}

                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: '20px' }} >
                        {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                label="Task ID "
                                placeholder='Task ID'
                                variant="outlined"
                                value={deviceName}
                                onChange={(e) => setDeviceName(e.target.value)}

                            /></Grid> */}





                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormControl fullWidth sx={{ m: 1, ml: 0 }}>
                                <TextField id="outlined-select-currency1"
                                    select
                                    defaultValue=""
                                    value={taskId}
                                    label="TaskType"
                                    placeholder='Select Task'
                                    onChange={(e) => setTaskId(e.target.value)} >
                                    {

                                        taskNameList.map((data) =>

                                            <MenuItem key={data.id} value={data.id}>{data.taskName}</MenuItem>,




                                        )

                                    }




                                </TextField>


                            </FormControl>


                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <TextField fullWidth type="text" required id="outlined-basic" label="SubTask" placeholder='Task Name' variant="outlined" value={subTaskName} onChange={(e) => setSubTaskName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Textarea size="lg" type="text" fullWidth sx={{ mt: 1, p: 1.8, borderColor: "#b9b9c6", borderRadius: 4 }} required aria-label="Description" label="Description" placeholder="Description" variant="outlined" value={subTaskDescription} onChange={(e) => setSubtaskDescription(e.target.value)} />                        </Grid>


                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Grid item>
                            <Button sx={{
                                background: "#1976D2", '&:hover': {
                                    backgroundColor: '#393d61',
                                }
                            }} type="submit" variant="contained">{isAddButton ? 'ADD' : 'UPDATE'}</Button>
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

        </Dialog >
    )

}

export default AddEmpolyee;


