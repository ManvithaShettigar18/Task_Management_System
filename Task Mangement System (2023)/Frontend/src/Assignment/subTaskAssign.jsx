import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SubTaskAssignToolbar from './subTaskAssignToolbar';
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SubtaskAssignEmp from './subtaskAssignEmp';
import PopupEmployeeAsiign from './AssigndEmployeeData';
//import UpdateEmployee from "./updateEmployee";
//import axios from "axios";

import { SingleTasktoEmployee } from "../ApiService";
//import { DeviceShowData } from "../ApiService";
//import { EmpUpdateData } from "../ApiService";
import { EmpDeleteData } from "../ApiService";
import BadgeIcon from '@mui/icons-material/Badge';
//import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


import { SubtaskAllData } from "../ApiService";

const AddDeviceResult = () => {


    const [open, setOpen] = useState(false);

    //const [open1, setOpen1] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [assignEmp, setassignEmp] = useState('');
    const [isAddButton, setIsAddButton] = useState(true);
    const [editData, setEditData] = useState([]);
    //const [editData1, setEditData1] = useState([]);
    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [dataId, setDataId] = useState('');


    // const [popup, setPopup] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [editData1, setEditData1] = useState([]);



    // const handleIconClick = () => {
    //     setPopup(true);

    // };

    // const handlePopUpClose = () => {
    //     setPopup(false);
    // };







    useEffect(() => {
        SubtaskAllData(SubtaskAllDataSuccess, SubtaskAllDataException);



    }, [refreshData]);

    const SubtaskAllDataSuccess = (dataObject) => {
        setRows(dataObject);
        setGridLoading(false);



    }

    console.log("rowswwww", rows)
    const SubtaskAllDataException = (errorObject, message) => { }



    const columns = [
        {
            field: 'taskName',
            headerName: <b>Task</b>,
            minWidth: 170,
            align: 'center',
            flex: 1,

            headerAlign: 'center'
        },
        {
            field: 'Name',
            headerName: <b>SubTask Name</b>,
            minWidth: 170,
            align: 'center',
            flex: 1,

            headerAlign: 'center'
        },
        {
            field: 'employeeName',
            headerName: <b>Employee Name</b>,
            minWidth: 100,
            align: 'center',

            flex: 1,
            headerAlign: 'center'
        },




        // {
        //     field: 'actions1',
        //     type: 'actions',
        //     headerName: <b>View Employee</b>,
        //     minWidth: 100,
        //     align: 'center',
        //     flex: 1,
        //     cellClassName: 'actions1',
        //     getActions: (params) => [
        //         <ViewEmpData selectedRow={params.row} />,



        //     ],
        // },

        {
            field: 'actions',
            type: 'actions',
            headerName: <b>Action</b>,
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
                console.log("props.selectedRow", props.selectedRow)
                //EmpUpdateData(props.selectedRow.id)
                setOpen(true);



            }}
            />
        );
    }


    // function ViewEmpData(props) {
    //     return (

    //         <VisibilityIcon onClick={() => {
    //             // setDeleteId(props.selectedRow.id);
    //             setDataId(props.selectedRow.id);
    //             setIsAddButton(false);
    //             setEditData1(props.selectedRow);
    //             setOpen1(true);

    //         }}
    // <div>

    //     <Button onClick={handleIconClick}
    //      >
    //         <VisibilityIcon  
    //  />

    //     </Button>




    //     {popup && <PopupEmployeeAsiign onClose={handlePopUpClose} />}




    // </div>

    // }}



    //     );

    // }


    function DeleteData(props) {
        return (

            <DeleteIcon onClick={() => {


                // EmpDeleteData({
                //     id: deleteData?.id,
                // }
                setDeleteId(props.selectedRow.id);
                EmpDeleteData({ id: props.selectedRow.id }, handleDelete3Sucess, handleDelete3Exception);




            }}

            />
        );
    }
    const handleDelete3Sucess = (dataObject) => {
        console.log(dataObject);
        setRefreshData(oldValue => !oldValue);
    }
    const handleDelete3Exception = (errorObject, errorMass) => {
        console.log(errorMass);
    }






    // const handleViewSucess = (dataObject) => {
    //     console.log(dataObject);
    //     setRefreshData(oldValue => !oldValue);
    // }
    // const handleViewException = (errorObject, errorMass) => {
    //     console.log(errorMass);
    // }







    return (
        <div style={{ height: 400, width: '90%', marginLeft: '20px', marginTop: '30px' }}>
            <SubTaskAssignToolbar
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
            <SubtaskAssignEmp
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}


            />
            <PopupEmployeeAsiign
                setOpen={setOpen1}
                open={open1}
                editData={editData1}
                dataId={dataId}

            />


        </div>


    )
}

export default AddDeviceResult;
