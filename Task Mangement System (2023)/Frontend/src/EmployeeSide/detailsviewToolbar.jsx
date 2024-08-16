
import React, { useState } from 'react';
import { DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, Card, CardHeader, CardContent, Typography } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { SendRequestMessage } from '../ApiService';
//import DialogTitle from '@mui/material/DialogTitle';
//import DialogContent from '@mui/material/DialogContent';
//import DialogActions from '@mui/material/DialogActions';
import ApplicationStore from '../ApplicationService';

function MyDialog({ setRefreshData }) {
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const { id } = ApplicationStore().getStorage('userDetails');
    const CurrentDate = new Date().toISOString().slice(0, 10);
    const handleSubmit = () => {

        SendRequestMessage({
            empId: id,
            Date: CurrentDate,
            sentMessage: description,



            // deviceTag: deviceTag,
            // deviceLocation: deviceLocation

        }, sendRequestMessageSucess, sendRequestMessageException)


    };

    const ClearData = () => {

        setDescription('');
    }
    const sendRequestMessageSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

    }
    const sendRequestMessageException = (errorObject, errorMass) => {

    }


    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button
                sx={{
                    mb: '0px',
                    marginTop: -6,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
                variant="outlined" onClick={handleClickOpen}>
                Send Message
            </Button>
            <Dialog sx={{ '& .MuiDialog-paper': { width: '82%', Height: '100%' } }}
                maxWidth="lg" open={open} onClose={handleClose}>
                <DialogTitle>Send Msg Reqeust</DialogTitle>
                <DialogContent>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Textarea size="lg" type="text" fullWidth sx={{ mt: 1, p: 1.8, borderColor: "#b9b9c6", borderRadius: 4 }} required aria-label="Description" label="Description" placeholder="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary">Submit</Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default MyDialog;


