import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddEmployeeToolBar from "./addEmployeeToolbar";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddEmployee from './addEmployee';
//import UpdateEmployee from "./updateEmployee";
//import axios from "axios";
import { DeviceShowData } from "../ApiService";
//import { EmpUpdateData } from "../ApiService";
import { EmpDeleteData } from "../ApiService";

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
        DeviceShowData(DeviceSuccess, DeviceException);



    }, [refreshData]);

    const DeviceSuccess = (dataObject) => {
        setRows(dataObject);
        setGridLoading(false);

    }







    const DeviceException = (errorObject, message) => { }



    const columns = [
        {
            field: 'empUid',
            headerName: 'UID',
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeName',
            headerName: 'Name',
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeRole',
            headerName: 'Role',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeEmail',
            headerName: 'Email',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'employeeContact',
            headerName: 'Contact No',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            minWidth: 100,
            align: 'center',
            flex: 1,
            cellClassName: 'actions',
            getActions: (params) => [
                <EditData selectedRow={params.row} />,
                <DeleteData selectedRow={params.row} />,
            ],
        },
    ];

    function EditData(props) {
        return (
            <EditIcon onClick={(event) => {

                setIsAddButton(false);
                setEditData(props.selectedRow);
                //EmpUpdateData(props.selectedRow.id)
                setOpen(true);



            }}
            />
        );
    }

    function DeleteData(props, confirm) {
        return (




            <DeleteIcon onClick={() => {


                // EmpDeleteData({
                //     id: deleteData?.id,
                // }
                if (window.confirm('Are you Sure') === true) {
                    setDeleteId(props.selectedRow.id);
                    EmpDeleteData({ id: props.selectedRow.id }, handleDeleteSucess, handleDeleteException);
                }





            }}

            />
        );
    }
    const handleDeleteSucess = (dataObject) => {
        console.log(dataObject);
        setRefreshData(oldValue => !oldValue);
    }
    const handleDeleteException = (errorObject, errorMass) => {
        console.log(errorMass);
    }

    return (
        <div style={{ height: 400, width: '90%', marginLeft: '20px', marginTop: '30px' }}>
            * <AddEmployeeToolBar
                setIsAddButton={setIsAddButton}
                setEditData={setEditData}
                setOpen={setOpen}

            />
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
            <AddEmployee
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
