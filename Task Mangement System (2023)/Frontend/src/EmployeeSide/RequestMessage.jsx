// import React, { useEffect, useState } from 'react'
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, Card, CardHeader, CardContent, Typography } from '@mui/material';
// import { EmpShowData } from "../ApiService";
// import { MyData } from "../ApiService";
// import ApplicationStore from '../ApplicationService';
// import DetailsReviewToolBar from "./detailsviewToolbar";
// import Textarea from '@mui/joy/Textarea';

// const AddEmpolyee = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {



//     const [messageRequest, setMessageRequest] = useState('');


//     const { id, Name } = ApplicationStore().getStorage('userDetails');

//     console.log("id-data", id);
//     console.log("empname", Name);










//     const onCancel = () => {
//         setOpen(false);

//     }



//     return (
//         // <Card
//         //     sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
//         //     maxWidth="lg"

//         // >
//         //     <CardHeader title="My Details" ></CardHeader>
//         //     <form >

//         //         <DialogContent>

//         //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//         //                 <label>NAME:</label>

//         //             </Grid>
//         //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

//         //                 <label>Email:</label>


//         //             </Grid>
//         //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//         //                 <label>Contact:</label>
//         //             </Grid>
//         //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//         //                 <label>userId:</label>

//         //             </Grid>

//         //         </DialogContent>

//         //     </form>

//         // </Card>




//         <Grid>

//             <Card sx={{ minWidth: "50%", marginRight: "auto", marginLeft: "auto", color: "white", width: "100px", height: "300px" }}>
//                 <div style={{ marginTop: 10 }}>

//                     <div style={{ color: "white" }} >

//                         <CardHeader sx={{ bgcolor: "blue", textAlign: 'start', }}
//                             title="MY DETAILS"
//                         />
//                     </div>


//                 </div>


//                 <CardContent
//                     id=''>
//                     {/* <div /> */}
//                     <Grid container sx={{}}>

//                         <Grid item xs={12}>
//                             <Textarea size="lg" type="text" fullWidth sx={{ mt: 1, p: 1.8, borderColor: "#b9b9c6", borderRadius: 4 }} required aria-label="Description" label="Description" placeholder="Description" variant="outlined" value={messageRequest} onChange={(e) => setMessageRequest(e.target.value)} />

//                         </Grid>

//                     </Grid>
//                     {/* </div> */}

//                     <Grid item>
//                         <Button sx={{
//                             background: "#1976D2", '&:hover': {
//                                 backgroundColor: '#393d61',
//                             }
//                         }} onClick={onCancel} variant="contained">Cancel</Button>
//                     </Grid>


//                 </CardContent>
//                 {/* <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
//                                 <Button variant="contained" sx={{ bgcolor: "#6F61C0" }} size="small" onClick={SubTaskStart} disabled={isButtonDisable}>Start</Button>
//                                 <Button variant="contained" sx={{ bgcolor: "#6F61C0" }} size="small">Complete</Button>
//                             </CardActions> */}
//             </Card>

//             <Grid sx={{ paddingLeft: 80, mt: 20 }}>



//             </Grid>

//         </Grid >

//     )
// }

// export default AddEmpolyee;
import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, FormControl } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
// import { styled } from '@mui/system';
import { TaskAdd } from '../ApiService';
import { TaskUpdateData } from "../ApiService";

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


    const [selected, setSelected] = useState('');



    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskAssignDate, setTaskAssignDate] = useState('');
    const [taskEndDate, setTaskEndDate] = useState('');
    const [taskPriority, setTaskPriority] = useState('');


    const changeSelectOption = (event) => {
        setSelected(event.target.value);
    };



    const onCancel = () => {
        setOpen(false);

    }
    const ClearData = () => {

        setTaskName('');
        setTaskDescription('');
        setTaskAssignDate('');
        setTaskEndDate('');
        setTaskPriority('');
        // setEmployeePassword('');
        // setEmpUid('');
    }


    useEffect(() => {

        setTaskName(editData?.taskName || '');
        setTaskDescription(editData?.taskDescription || '');
        setTaskAssignDate(editData?.taskAssignDate || '');
        setTaskEndDate(editData?.taskEndDate || '');
        setTaskPriority(editData?.taskPriority || '');


    }, [editData])
    const AddnData = (e) => {
        if (isAddButton === true) {
            TaskAdd({
                taskName: taskName,
                taskDescription: taskDescription,
                taskAssignDate: taskAssignDate,
                taskEndDate: taskEndDate,
                taskPriority: taskPriority,


                // deviceTag: deviceTag,
                // deviceLocation: deviceLocation

            }, handleTaskAddSucess, handleTaskAddException)
        } else {
            TaskUpdateData({
                id: editData?.id,
                taskName: taskName,
                taskDescription: taskDescription,
                taskAssignDate: taskAssignDate,
                taskEndDate: taskEndDate,
                taskPriority: taskPriority,

            }, handleEditSucess, handleEditException)

        }


    }

    const handleTaskAddSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }
    const handleTaskAddException = (errorObject, errorMass) => {

    }

    const handleEditException = (errorObject, errorMass) => {

    }
    const handleEditSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }

    const New = [
        //  ' ssss ', 'yyyyyy'
    ];
    const Repeated = [

        " weekly",
        "Montly",
        "15 days"

    ];
    const Todo = [

        // " weekly",
        // "Montly",

    ];

    let type = null;
    let options = null;


    if (selected === "New") {
        type = New;
    } else if (selected === "Repated") {
        type = Repeated;
    } else if (selected === "Todo") {
        type = Todo;
    }

    if (type) {
        options = type.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>);
    }


    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'ADD Task' : 'UPDATE Task  '}

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
                            <TextField fullWidth type="text" required id="outlined-basic" label="Title" placeholder='Task Name' variant="outlined" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}   >
                                <DemoContainer components={['DatePicker']}  >
                                    <DatePicker sx={{ width: 520 }} label="Assign Date" value={taskAssignDate} onChange={(e) => setTaskAssignDate(e.target.value)} />
                                </DemoContainer>
                            </LocalizationProvider> */}
                            <TextField InputLabelProps={{ shrink: true }} fullWidth required id="outlined-basic" label="Assign Date " type="date" variant="outlined" value={taskAssignDate} onChange={(e) => setTaskAssignDate(e.target.value)} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']} >
                                    <DatePicker sx={{ width: 520 }} label="End Date" ></DatePicker>
                                </DemoContainer>
                            </LocalizationProvider> */}

                            <TextField InputLabelProps={{ shrink: true }} fullWidth required id="outlined-basic" label="End Date " type="date" variant="outlined" value={taskEndDate} onChange={(e) => setTaskEndDate(e.target.value)} />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <FormControl fullWidth sx={{ m: 1, ml: 0 }}>
                                <TextField id="outlined-select-currency1"
                                    select
                                    defaultValue=""
                                    value={selected}
                                    label="TaskType"
                                    placeholder='Select Task'
                                    onChange={changeSelectOption} >
                                    <MenuItem value='New'>New</MenuItem>
                                    <MenuItem value='Repated'>Repeated</MenuItem>
                                    <MenuItem value='Todo'>Todo</MenuItem>

                                </TextField>


                            </FormControl>

                            {
                                selected === 'New' ?
                                    (
                                        <></>
                                    ) : selected === 'Repated' ? (

                                        <FormControl fullWidth sx={{ m: 1, ml: 0 }}>
                                            <TextField id="outlined-select-currency1"
                                                select
                                                defaultValue=""
                                                required

                                                label="Repeated Types"
                                                placeholder='Repeated Types'
                                            >
                                                {options.map((data) =>
                                                    <MenuItem key={data} value={data}>{data}</MenuItem>
                                                )

                                                }

                                            </TextField>


                                        </FormControl>
                                    ) : selected === 'Todo' ? (
                                        <></>

                                    ) : (
                                        <></>
                                    )

                            }


                        </Grid>
                        {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <FormControl fullWidth sx={{ m: 1, ml: 0 }}>
                                <TextField id="outlined-select-currency1"
                                    select
                                    defaultValue=""

                                    label="TaskType"
                                    placeholder='Select Task'
                                >
                                    <MenuItem value={options}>{options}</MenuItem>
                                </TextField>
                            </FormControl>
                        </Grid> */}


                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Textarea size="lg" type="text" fullWidth sx={{ mt: 1, p: 1.8, borderColor: "#b9b9c6", borderRadius: 4 }} required aria-label="Description" label="Description" placeholder="Description" variant="outlined" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                            {/* < TextareaAutosize

                                fullWidth required id="outlined-basic" label="Description " placeholder='Task Description'>
                                {/* <TextField fullWidth required id="outlined-basic" label="Description " placeholder='Task Description' variant="outlined" /> */}
                            {/* </TextareaAutosize>  */}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <FormControl fullWidth sx={{ m: 1, ml: 0 }}>
                                {/* <TextField fullWidth required id="outlined-basic" label="Priority " placeholder='Priority' variant="outlined" /> */}
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    defaultValue=""
                                    required

                                    label="Priority"
                                    placeholder='Select Priority'

                                    // defaultValue="EUR"
                                    //helperText="Please set the Priority"
                                    value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}

                                >

                                    {/* <MenuItem      >
                                            {option.value}
                                        </MenuItem> */}
                                    <MenuItem value='High'>
                                        High
                                        {/* {option.value} */}
                                    </MenuItem>
                                    <MenuItem value='Low'>Low</MenuItem>
                                </TextField>
                            </FormControl>
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



