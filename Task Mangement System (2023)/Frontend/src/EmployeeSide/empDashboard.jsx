//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, FormControl, Input, InputLabel, colors } from '@mui/material';
import { Grid } from '@mui/material';
import ApplicationStore from '../ApplicationService';
//EmpDashboard
//import { EmpDashboard } from "../ApiService";
import { EmpsubtaskDashboard, AddTaskStartData, UpdatetaskComplete } from "../ApiService";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Grid4x4TwoTone } from '@mui/icons-material';







const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
// const { id } = ApplicationStore().getStorage('userDetails');
// //console.log("id", id);

//     EmpDashboard({

//         id: id,
//         // taskAssignDate: taskAssignDate,
//         // taskEndDate: taskEndDate,
//         // taskPriority: taskPriority,


//         // deviceTag: deviceTag,
//         // deviceLocation: deviceLocation

//     }, EmpDashboardSucess, EmpDashboardException)


// const EmpDashboardSucess = (dataObject) => {
//     //console.log("task", dataObject);
// }
// const EmpDashboardException = (errorObject, errorMass) => { }


export default function BasicCard() {

    const [allSubTask, setAllSubTask] = useState([]);
    const [isButtonDisable, setIsButtonDisable] = useState(false);
    const [SubtaskId, setSubtaskId] = useState('');
    const [isRefresh, setIsRefresh] = useState(true);
    // const [disabledButtons, setDisabledButtons] = useState(false);




    const { id, Name } = ApplicationStore().getStorage('userDetails');
    console.log("id-data", id);
    console.log("name-data", Name);

    useEffect((event) => {
        // event.preventDefault();
        EmpsubtaskDashboard({
            id: id,
        }, EmpsubtaskDashboardSucess, EmpsubtaskDashboardException)



    }, [id, isRefresh]);

    const empid = id;

    const EmpsubtaskDashboardSucess = (dataObject) => {

        console.log("task-subtask", dataObject);
        setAllSubTask(dataObject);
        //ApplicationStore().setStorage('LoginedEmployee', dataObject);
    }
    console.log("alldata", allSubTask);
    // console.log("namewwww", allSubTask[0].taskName)
    // const [taskData] = ApplicationStore().getStorage('LoginedEmployee');


    // console.log("taskdata", taskData);

    // console.log("taskName", taskData.taskName);
    // console.log("taskDescription", taskData.taskDescription);
    // console.log("taskAssignDate", taskData.taskAssignDate);
    // console.log("taskEndDate", taskData.taskEndDate);


    // const TaskId = taskData.taskId;
    // const TaskName = taskData.taskName;
    // const TaskDescription = taskData.taskDescription;
    // const TaskAssignDate = taskData.taskAssignDate;
    // const TaskEndDate = taskData.taskEndDate;
    // const TaskPriority = taskData.taskPriority;


    const EmpsubtaskDashboardException = (errorObject, errorMass) => { }

    const CurrentDate = new Date().toISOString();
    const SubTaskStart = (data) => {
        console.log(data?.id)
        AddTaskStartData({
            // taskId: taskId,
            // Description: subTaskDescription,
            // Name: subTaskName,

            taskId: allSubTask[0].taskId,
            subtaskId: data?.id,
            employeeId: empid,
            empName: Name,
            taskAssignDate: allSubTask[0]?.taskAssignDate,
            assignedTaskEndDate: allSubTask[0]?.taskEndDate,
            taskStartedDate: CurrentDate,





        }, AddTaskStartDataSucess, AddTaskStartDataException)
        setIsButtonDisable(true);
        // setDisabledButtons(true);
    }

    const AddTaskStartDataSucess = (dataObject) => {

        // setRefreshData(oldValue => !oldValue);
        // ClearData();
        console.log(dataObject)
        setIsRefresh(oldValue => !oldValue);

    }
    const AddTaskStartDataException = (errorObject, errorMass) => {

    }


    const CurrentDateTaskComplete = new Date().toISOString().slice(0, 10);
    const SubTaskComplete = (data) => {
        console.log("subid", data?.id)

        UpdatetaskComplete({



            subtaskId: data?.id,
            taskCompletedDate: CurrentDateTaskComplete,





        }, UpdatetaskCompleteSucess, UpdatetaskCompleteException)
        setIsButtonDisable(true);
        // setDisabledButtons(true);
    }
    const UpdatetaskCompleteSucess = (dataObject) => {

        console.log("update data", dataObject)
        setIsRefresh(oldValue => !oldValue);

    }
    const UpdatetaskCompleteException = (errorObject, errorMass) => {

    }


    return (

        <div   >
            {/* <AppBar position="relative" color="secondary" sx={{ top: 'auto', }}>
                <Toolbar>

                    <Box sx={{ flexGrow: 1 }} />

                </Toolbar>
            </AppBar> */}
            <Card>
                <CardHeader sx={{ display: 'flex', bgcolor: "skyblue", textAlign: 'start' }}

                    title={allSubTask[0]?.taskName}
                    subheader={allSubTask[0]?.taskDescription}
                    action={
                        <div>
                            <label style={{ display: 'flex', marginLeft: 0 }}>
                                Assign Date:{allSubTask[0]?.taskAssignDate}

                            </label>
                            <label></label>
                            <label style={{ marginTop: 10 }}>
                                End DAte:{allSubTask[0]?.taskEndDate}
                            </label>
                        </div>
                    }
                >

                </CardHeader>
                <CardContent>



                    <div style={{ display: "inline-flex" }} value={SubtaskId}>
                        {allSubTask.map((data) =>
                            <Grid>
                                <Card sx={{ minWidth: "90%", marginRight: "30px", marginLeft: "auto", color: "white", width: "300px" }} >
                                    <div style={{ marginTop: 10 }}>
                                        {
                                            data.taskPriority === "High" ? (
                                                <div style={{ color: "white" }} >


                                                    <CardHeader
                                                        sx={{
                                                            textAlign: 'start',
                                                            bgcolor: (data.taskPriority === "High" && data.completeButton === "true") ? "grey" :
                                                                (data.taskPriority === "High") ? "red" :
                                                                    (data.taskPriority === "Low" && data.completeButton === "true") ? "grey" :
                                                                        (data.taskPriority === "Low") ? "green" :
                                                                            "#5D9C59"
                                                        }}
                                                        title={data.Name}
                                                    />
                                                </div>

                                            ) : (
                                                // <div>
                                                //     <CardHeader
                                                //         sx={{
                                                //             textAlign: 'start',
                                                //             bgcolor: (data.taskPriority === "low" && data?.completeButton === "true") ? "grey" : "green"

                                                //         }}
                                                //         title={data.Name}
                                                //     />
                                                // </div>
                                                <CardHeader
                                                    sx={{
                                                        textAlign: 'start',
                                                        bgcolor: (data.taskPriority === "High" && data.completeButton === "true") ? "grey" :
                                                            (data.taskPriority === "High") ? "red" :
                                                                (data.taskPriority === "Low" && data.completeButton === "true") ? "grey" :
                                                                    (data.taskPriority === "Low") ? "green" :
                                                                        "#5D9C59"
                                                    }}
                                                    title={data.Name}
                                                />
                                            )
                                        }
                                    </div>


                                    <CardContent
                                        id={data.id}>
                                        <div >

                                            <Typography sx={{ fontSize: 18, textAlign: 'start' }} color="text.secondary" gutterBottom value={data.id}>
                                                Description:{data.description}
                                            </Typography>

                                        </div>




                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ bgcolor: "#6F61C0" }} size="small" onClick={() => SubTaskStart(data)} disabled={data?.startButton === "true"}>Start</Button>
                                        <Button variant="contained" sx={{ bgcolor: "#6F61C0" }} size="small" onClick={() => SubTaskComplete(data)} disabled={data?.completeButton === "true"}>Complete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                        }

                    </div>
                </CardContent>

            </Card>
        </div>

    );
}