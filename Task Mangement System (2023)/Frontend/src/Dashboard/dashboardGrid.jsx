import React, { useState, useEffect } from 'react';


import { DataGrid, GridToolbar } from '@mui/x-data-grid';

//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//import UpdateTask from "./updateTask";
//import axios from "axios";
import { Dashboard, SubTask } from "../ApiService";
import Chip from '@mui/material/Chip';
//import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
//import { Modal } from '@mui/material';
//import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ApplicationStore from '../ApplicationService';
import { Title } from '@mui/icons-material';
import SubDashboard from './subdashboard';

const AddDeviceResult = () => {
    //console.log("dashboard adddeviceresult")

    // const [showConfirmation, setShowConfirm] = useState(true);


    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [progress, setProgress] = React.useState(10);

    const [isAddButton, setIsAddButton] = useState(true);

    // const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);




    //to update task
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState([]);

    useEffect(() => {
        const { Name, Role } = ApplicationStore().getStorage('userDetails');
        console.log("user---Details00000000000000", Role);
        console.log("dashboard useEffect")
        Dashboard(DashboardSuccess, DashboardException);
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };



    }, [refreshData]);


    const DashboardSuccess = (dataObject) => {
        console.log("dashboard success")
        setRows(dataObject);
        setGridLoading(false);


    }
    const DashboardException = (errorObject, message) => { }



    // console.log("row", rows);

    // const hi = ApplicationStore().getStorage("userDetails", dataObject);
    // console.log("hi", hi);

    const columns = [

        {
            field: 'taskName',
            headerName: ' Title',
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'taskDescription',
            headerName: 'Description',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },

        {
            field: 'taskAssignDate',
            headerName: 'Assigned Date',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },

        {
            field: 'taskEndDate',
            headerName: 'End Date',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'taskPriority',
            headerName: ' Priority',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center',
            renderCell: (params) => {

                if (params.value === "High") {

                    return <Chip label={params.value} color='success' />;
                }
                else {
                    return <Chip label={params.value} color='warning' />;
                }




            },
        },
        // {
        //     field: 'taskCompletedPercentage',
        //     headerName: ' Percentage',
        //     minWidth: 100,
        //     align: 'center',
        //     flex: 1,
        //     headerAlign: 'center',
        //     renderCell: (params, props) => {

        //         return <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        //             <CircularProgress variant="determinate" {...props} value={progress} />
        //             <Box
        //                 sx={{
        //                     top: 0,
        //                     left: 0,
        //                     bottom: 0,
        //                     right: 0,
        //                     position: 'absolute',
        //                     display: 'flex',
        //                     alignItems: 'center',
        //                     justifyContent: 'center',
        //                 }}
        //             >
        //                 <Typography variant="caption" component="div" color="text.secondary">
        //                     {`${Math.round('taskCompletedPercentage')}%`}
        //                 </Typography>
        //             </Box>
        //         </Box>;



        //     },

        // },
        {
            field: 'taskCompletedPercentage',
            headerName: ' Percentage',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center',
            renderCell: (params) => {
                const progress = params.value;

                return (
                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress variant="determinate" value={progress} />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" color="text.secondary">
                                {`${Math.round(progress)}%`}
                            </Typography>
                        </Box>
                    </Box>
                );
            },
        },

        {
            field: 'finalTaskComplete',
            headerName: 'Status',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeName',
            headerName: ' Assigned Employee',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'View SubTasks',
            minWidth: 100,
            align: 'center',
            flex: 1,
            cellClassName: 'actions',
            getActions: (params) => [
                <EditData selectedRow={params.row.id} />,
                // <Link style={{ textDecoration: "none", color: "blue" }} to={ <EditData/> + params.row.id}><VisibilityIcon />View Subtasks</Link>
            ],
        },

    ];


    function EditData(props) {
        return (
            <VisibilityIcon onClick={(event) => {

                setIsAddButton(false);
                setEditData(props.selectedRow);
                console.log("props.selectedRow", props.selectedRow)
                setOpen(true);

            }}

            />

        );
    }



    return (
        <div style={{ height: 400, width: '100%', marginLeft: '20px', marginTop: '30px' }}>

            <Paper elevation={3} style={{ width: '95%', height: '500px' }} >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    checkboxSelection

                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </Paper>

            <SubDashboard
                setOpen={setOpen}
                open={open}
                editData={editData}

                setRefreshData={setRefreshData}
                isAddButton={isAddButton}

            />



        </div>



    )
}

export default AddDeviceResult;
