import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, FormControl } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
// import { styled } from '@mui/system';
//import ApplicationStore from '../ApplicationService';

import { AddSubTask, TaskNameData, SubTaskUpdate, SubDashboardGrid, PieChartSubDashboard } from '../ApiService';
//import { TaskUpdateData } from "../ApiService";
import { DataGrid } from '@mui/x-data-grid';

//import { Password } from '@mui/icons-material';
// import { TextareaAutosize } from '@mui/base';


//for Date Picker
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Paper } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import { PieChart } from '@mui/x-charts/PieChart';



const AddEmpolyee = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {

    const [taskId, setTaskId] = useState('');


    const [subdataList, setSubdataList] = useState([]);
    const [PiechartsubdataList, setPiechartSubdataList] = useState([]);

    // const changeSelectOption = (event) => {
    //     setSelected(event.target.value);
    // };



    const onCancel = () => {
        setOpen(false);

    }
    const ClearData = () => {

        setSubdataList([]);


    }

    // useEffect((event) => {
    //     // event.preventDefault();
    //     EmpsubtaskDashboard({
    //         id: id,
    //     }, EmpsubtaskDashboardSucess, EmpsubtaskDashboardException)



    // }, [id, isRefresh]);

    useEffect(() => {
        console.log("idddddd", editData);


        SubDashboardGrid({
            taskId: editData,
        },
            SubDashboardGridSuccess, SubDashboardGridException);
        console.log("idddddd1111", editData);

    }, [editData]);


    const SubDashboardGridSuccess = (dataObject) => {
        setSubdataList(dataObject);
        console.log("subdataList", subdataList)
    }
    const SubDashboardGridException = (errorObject, message) => { }


    useEffect(() => {
        console.log("idforpiechart", editData);


        PieChartSubDashboard({
            taskId: editData,
        },
            PieChartSubDashboardSuccess, PieChartSubDashboardException);
        console.log("idforpiechart1", editData);

    }, [editData]);


    const PieChartSubDashboardSuccess = (dataObject) => {
        setPiechartSubdataList(dataObject);
        console.log("PieChartSubDashboard", PiechartsubdataList);

    }
    const PieChartSubDashboardException = (errorObject, message) => { }



    const columns = [

        {
            field: 'Name',
            headerName: ' subTaskName',
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'taskAssignDate',
            headerName: 'Task Assigned Date',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'assignedTaskEndDate',
            headerName: 'Task End Date',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'taskStartedDate',
            headerName: 'Task Start Date',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'taskCompletedDate',
            headerName: 'Task Completed Date',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },




    ];



    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '82%', height: "70%", maxHeight: '200%' } }}
            maxWidth="lg"
            open={open}
        >
            <form >
                {/* <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'SubTask Data' : 'SubTask Data  '}

                </DialogTitle> */}
                <DialogContent style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {/* <Grid container spacing={2} style={{ marginTop: '20px' }} > */}





                    {/* <Grid item xs={2}> */}
                    {/* <FormControl fullWidth sx={{ m: 1, ml: 0 }}>
                                <TextField id="outlined-select-currency1"
                                >


                                </TextField>


                            </FormControl> */}
                    <Paper elevation={3} style={{ width: '65%', height: '400px', display: 'inline-flex' }} >
                        <DataGrid
                            rows={subdataList}
                            columns={columns}
                            pageSize={5}
                            // loading={isLoading}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                        />
                    </Paper>


                    {/* </Grid> */}
                    <Grid style={{ display: 'inline-flex' }}>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: PiechartsubdataList?.completed_percentage, label: 'Completed' },
                                        { id: 1, value: PiechartsubdataList?.on_process_percentage, label: 'On-Process' },
                                        { id: 2, value: PiechartsubdataList?.delay_percentage, label: 'Delay' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}

                        />
                    </Grid>


                    {/* </Grid> */}

                </DialogContent>
                <DialogActions>
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>

                        <Grid item>
                            <Button sx={{
                                background: "#1976D2", '&:hover': {
                                    backgroundColor: '#393d61',
                                }
                            }} onClick={onCancel} variant="contained">Close</Button>
                        </Grid>

                    </Grid>
                </DialogActions>
            </form>

        </Dialog >
    )

}

export default AddEmpolyee;


