import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddEmployeeToolBar from "../Employee/addEmployeeToolbar";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import EmpAddTaks from '../RemainEmployeeAdd/AddEmpToTask';
//import UpdateEmployee from "./updateEmployee";
//import axios from "axios";
import { DeviceShowData } from "../ApiService";
//import { EmpUpdateData } from "../ApiService";
import { RemainingEmployee } from "../ApiService";
import { Button } from '@mui/material';

const AddDeviceResult = () => {


    const [open, setOpen] = useState(false);
    //const [open1, setOpen1] = useState(false);
    const [, setDeleteId] = useState('');

    const [isAddButton, setIsAddButton] = useState(true);
    const [editData, setEditData] = useState([]);
    //const [editData1, setEditData1] = useState([]);
    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);









    useEffect(() => {
        RemainingEmployee(RemainingEmployeeSuccess, RemainingEmployeeException);



    }, [refreshData]);

    const RemainingEmployeeSuccess = (dataObject) => {
        setRows(dataObject);
        setGridLoading(false);

    }







    const RemainingEmployeeException = (errorObject, message) => { }



    const columns = [

        {
            field: 'employeeName',
            headerName: <b>Name</b>,
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },

        {
            field: 'employeeEmail',
            headerName: <b>Email</b>,
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeContact',
            headerName: <b>Contact No</b>,
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: <b>Actions</b>,
            minWidth: 100,
            align: 'center',
            flex: 1,
            cellClassName: 'actions',
            getActions: (params) => [
                <EditData selectedRow={params.row} />,
                // <DeleteData selectedRow={params.row} />,
            ],
        },
    ];

    function EditData(props) {
        return (
            <Button variant="contained"
                onClick={(event) => {

                    setIsAddButton(false);
                    setEditData(props.selectedRow);
                    //EmpUpdateData(props.selectedRow.id)
                    setOpen(true);



                }}
            >Assign Task</Button>
        );
    }

    // function DeleteData(props, confirm) {
    //     return (




    // <DeleteIcon onClick={() => {


    //     // EmpDeleteData({
    //     //     id: deleteData?.id,
    //     // }
    //     if (window.confirm('Are you Sure') === true) {
    //         setDeleteId(props.selectedRow.id);
    //         EmpDeleteData({ id: props.selectedRow.id }, handleDeleteSucess, handleDeleteException);
    //     }





    // }}

    // />
    //     );
    // }
    // const handleDeleteSucess = (dataObject) => {
    //     console.log(dataObject);
    //     setRefreshData(oldValue => !oldValue);
    // }
    // const handleDeleteException = (errorObject, errorMass) => {
    //     console.log(errorMass);
    // }

    return (
        <div style={{ height: 400, width: '90%', marginLeft: '20px', marginTop: '30px' }}>
            {/* * <AddEmployeeToolBar
                setIsAddButton={setIsAddButton}
                setEditData={setEditData}
                setOpen={setOpen}

            /> */}
            <Paper elevation={3} style={{ width: '85%', height: '500px' }} >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Paper>
            <EmpAddTaks
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}


            />
            {/* <UpdateEmployee
                setOpen={setOpen1}
                open={open1}
                editData1={editData1}

            /> */}

        </div>


    )
}

export default AddDeviceResult;
