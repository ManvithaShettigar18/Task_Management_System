
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
//import Dialog from '@mui/material/Dialog';
import { Box, DialogActions, DialogContent, Grid, Paper, TextField, MenuItem, FormControl, Dialog } from '@mui/material';
import { SingleEmployee } from "../ApiService";





function PopupEmployeeAsiign({ open, setOpen, editData1, dataId }) {
    const [employeeName, setEmployeeName] = useState('');

    const [employeeEmail, setEmployeeEmail] = useState('');

    useEffect(() => {

        setEmployeeName(editData1?.employeeName || '');

        setEmployeeEmail(editData1?.employeeEmail || '');



    }, [editData1])

    const AddnData = (e) => {
        // SingleEmployee{



        {
            SingleEmployee({
                id: editData1?.id,

            }, handleSucess, handleException)

        }

    }
    const handleSucess = (dataObject) => {
        setOpen(false);

        // setRefreshData(oldValue => !oldValue);
        // ClearData();
        console.log(dataObject)

    }

    const handleException = (errorObject, errorMass) => {

    }







    const onCancel = () => {
        setOpen(false);

    }
    return (

        <Dialog
            sx={{ '& .MuiDialog-paper': { maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        ><form onSubmit={AddnData}>
                {/* <DialogTitle sx={{ background: "#02083d", color: "#fafcfc" }}>
                    Employee Details
                </DialogTitle> */}

                <Box >
                    <Paper elevation={3} >

                        <DialogContent>


                            <Grid container spacing={2} style={{ marginTop: '20px' }} >


                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormControl id="1" fullWidth sx={{ m: 1, ml: 0 }}>
                                        <TextField id="outlined-select-21" key="tname" defaultValue="" label="Name" placeholder='Task' variant="standard" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} ></TextField>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormControl id="1" fullWidth sx={{ m: 1, ml: 0 }}>
                                        <TextField id="outlined-select-22" key="temail" defaultValue="" label="Email " placeholder='Task' variant="standard" value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)}></TextField>
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
                                    }} onClick={onCancel} variant="contained">Close</Button>
                                </Grid>

                            </Grid>
                        </DialogActions>
                    </Paper>
                </Box>
            </form>
        </Dialog>
    );
}

export default PopupEmployeeAsiign;

