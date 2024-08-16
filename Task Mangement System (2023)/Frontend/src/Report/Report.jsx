import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
//import AddTaskToolBar from "./subTaskToolbar";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import AddTask from './addSubTask';
//import UpdateTask from "./updateTask";
//import axios from "axios";
import { SubTask } from "../ApiService";
import { TaskNameData } from "../ApiService";

import { DisplyCompletedTaskDataReport } from "../ApiService";
import { Typography } from '@mui/material';
//import { Modal } from '@mui/material';
// import Dropdown from "./Dropdown";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const AddDeviceResult = () => {
    // const [showConfirmation, setShowConfirm] = useState(true);

    const [open, setOpen] = useState(false);

    const [, setDeleteId] = useState('');

    // const [isAddButton, setIsAddButton] = useState(true);
    const [editData, setEditData] = useState([]);

    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [isAddButton, setIsAddButton] = useState(true);

    const [taskList, setTaskList] = useState([]);
    const [taskName, setTaskName] = useState("All");


    // const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);




    //to update task
    // const [open1, setOpen1] = useState(false);
    // const [editData1, setEditData1] = useState([]);

    useEffect(() => {

        DisplyCompletedTaskDataReport(taskName, DisplyCompletedTaskDataSuccess, DisplyCompletedTaskDataException);

        TaskNameData(TaskNameData111Success, TaskNameData111Exception);

    }, [refreshData]);

    const DisplyCompletedTaskDataSuccess = (dataObject) => {
        setRows(dataObject);
        setGridLoading(false);

    }
    const DisplyCompletedTaskDataException = (errorObject, message) => { }


    const TaskNameData111Success = (dataObject) => {
        setTaskList(dataObject);
        setGridLoading(false);

    }
    const TaskNameData111Exception = (errorObject, message) => { }


    const columns = [
        // {
        //     field: 'id',
        //     headerName: 'TaskId',
        //     minWidth: 170,
        //     align: 'center',
        //     flex: 1,
        //     headerAlign: 'center'
        // },
        {
            field: 'taskName',
            headerName: ' TaskName',
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'Name',
            headerName: 'SubTask Name',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeId',
            headerName: 'Employee Id',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'empName',
            headerName: 'Employee Name',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'taskAssignDate',
            headerName: 'TaskAssignDate',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },

        {
            field: 'assignedTaskEndDate',
            headerName: 'TaskEndDate',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },

        {
            field: 'taskStartedDate',
            headerName: 'TaskStartedDate',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },

        {
            field: 'taskCompletedDate',
            headerName: 'TaskCompletedDate',
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

    // function EditData(props) {
    //     return (
    //         <EditIcon onClick={(event) => {

    //             setIsAddButton(false);
    //             setEditData(props.selectedRow);
    //             console.log("props.selectedRow", props.selectedRow)
    //             setOpen(true);
    //         }}
    //         />
    //     );
    // }

    // const confirmDelete = () => {
    //     setShowConfirm(false);

    // }

    // const handleDeleteClick = () => {
    //     setIsDeleteConfirmationOpen(true);
    // };

    // const handleCancelDelete = () => {
    //     setIsDeleteConfirmationOpen(false);
    // };


    // function DeleteData(props) {

    //     return (

    //         <DeleteIcon


    //             onClick={(click) => {

    // { setShowConfirm(true) }
    // <Modal
    //     isopen={showConfirmation}

    //     onRequestedClose={() => setShowConfirm(false)} >
    //     <h2> confirm delete</h2>
    //     <p>are you sure you want  to delete</p>
    //     <Button onClick={confirmDelete}>ok</Button>
    //     <Button onClick={() => setShowConfirm(false)}>cancel</Button>
    // </Modal>
    //         if (window.confirm('Are you Sure') === true) {

    //             setDeleteId(props.selectedRow.id);
    //             SubTaskDelete({ id: props.selectedRow.id }, SubTaskDeleteSucess, SubTaskDeleteException);
    //             // setIsDeleteConfirmationOpen(true);
    //         }

    //     }}


    // />



    // <Modal
    // open(showConfirmation);
    // onRequestedClose(()=>setShowConfirm(false));
    // >
    //     </Modal
    //     );
    // }

    // <div>
    //     {isDeleteConfirmationOpen && (
    //         <DeleteConfirmation
    //             onDeleteConfirm={DeleteData}
    //             onCancel={handleCancelDelete}
    //         />
    //     )}
    //     <Button onClick={handleDeleteClick}></Button>
    // </div>



    // const SubTaskDeleteSucess = (dataObject) => {
    //     console.log(dataObject);
    //     setRefreshData(oldValue => !oldValue);
    //     // setIsDeleteConfirmationOpen(true);
    // }
    // const SubTaskDeleteException = (errorObject, errorMass) => {
    //     console.log(errorMass);
    // }
    function BasicSelect() {


        const handleChange = (event) => {
            setTaskName(event.target.value);
            setRefreshData(oldValue => !oldValue);
        };

        return (
            <Box sx={{ width: 200, marginBottom: 5 }}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Task Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={taskName}
                        label="Task Name"
                        onChange={handleChange}
                    >
                        <MenuItem key={0} value={"All"}>All</MenuItem>
                        {

                            taskList.map((data) =>

                                <MenuItem key={data.id + 1} value={data.taskName}>{data.taskName}</MenuItem>,




                            )

                        }
                    </Select>
                </FormControl>
            </Box>
        );
    }

    return (
        <div style={{ height: 400, width: '90%', marginLeft: '20px', marginTop: '30px' }}>
            {/* * <AddTaskToolBar
                setIsAddButton={setIsAddButton}
                setEditData={setEditData}
                setOpen={setOpen}
            /> */}
            <BasicSelect taskName={taskName} setTaskName={setTaskName} taskList={taskList} />
            <Paper elevation={3} style={{ width: '95%', height: '500px' }} >
                <Typography variant="h4">Task Report</Typography>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Paper>

            {/* <AddTask
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}

            /> */}
            {/* <UpdateTask
                setOpen={setOpen1}
                open={open1}
                editData={editData1}
            /> */}

        </div>


    )
}

export default AddDeviceResult;
