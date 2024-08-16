import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddTaskToolBar from "./subTaskToolbar";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddTask from './addSubTask';
//import UpdateTask from "./updateTask";
//import axios from "axios";
import { SubTask } from "../ApiService";
import { SubTaskDelete } from "../ApiService";
//import { Modal } from '@mui/material';




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

    // const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);




    //to update task
    // const [open1, setOpen1] = useState(false);
    // const [editData1, setEditData1] = useState([]);

    useEffect(() => {
        SubTask(SubTaskSuccess, SubTaskException);

    }, [refreshData]);

    const SubTaskSuccess = (dataObject) => {
        setRows(dataObject);
        setGridLoading(false);

    }
    const SubTaskException = (errorObject, message) => { }





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
            field: 'Description',
            headerName: 'SubTask Description',
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
                console.log("props.selectedRow", props.selectedRow)
                setOpen(true);
            }}
            />
        );
    }

    // const confirmDelete = () => {
    //     setShowConfirm(false);

    // }

    // const handleDeleteClick = () => {
    //     setIsDeleteConfirmationOpen(true);
    // };

    // const handleCancelDelete = () => {
    //     setIsDeleteConfirmationOpen(false);
    // };


    function DeleteData(props) {

        return (

            <DeleteIcon


                onClick={(click) => {

                    // { setShowConfirm(true) }
                    // <Modal
                    //     isopen={showConfirmation}

                    //     onRequestedClose={() => setShowConfirm(false)} >
                    //     <h2> confirm delete</h2>
                    //     <p>are you sure you want  to delete</p>
                    //     <Button onClick={confirmDelete}>ok</Button>
                    //     <Button onClick={() => setShowConfirm(false)}>cancel</Button>
                    // </Modal>
                    if (window.confirm('Are you Sure') === true) {

                        setDeleteId(props.selectedRow.id);
                        SubTaskDelete({ id: props.selectedRow.id }, SubTaskDeleteSucess, SubTaskDeleteException);
                        // setIsDeleteConfirmationOpen(true);
                    }

                }}


            />



            // <Modal
            // open(showConfirmation);
            // onRequestedClose(()=>setShowConfirm(false));
            // >
            //     </Modal
        );
    }

    // <div>
    //     {isDeleteConfirmationOpen && (
    //         <DeleteConfirmation
    //             onDeleteConfirm={DeleteData}
    //             onCancel={handleCancelDelete}
    //         />
    //     )}
    //     <Button onClick={handleDeleteClick}></Button>
    // </div>



    const SubTaskDeleteSucess = (dataObject) => {
        console.log(dataObject);
        setRefreshData(oldValue => !oldValue);
        // setIsDeleteConfirmationOpen(true);
    }
    const SubTaskDeleteException = (errorObject, errorMass) => {
        console.log(errorMass);
    }

    return (
        <div style={{ height: 400, width: '90%', marginLeft: '20px', marginTop: '30px' }}>
            * <AddTaskToolBar
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

            <AddTask
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}

            />
            {/* <UpdateTask
                setOpen={setOpen1}
                open={open1}
                editData={editData1}
            /> */}

        </div>


    )
}

export default AddDeviceResult;
