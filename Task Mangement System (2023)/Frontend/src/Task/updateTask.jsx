import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, FormControl } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';


//for Date Picker
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const AddEmpolyee = ({ open, setOpen, editData }) => {
    const [deviceName, setDeviceName] = useState('');
    const onCancel = () => {
        setOpen(false);

    }

    useEffect(() => {
        setDeviceName(editData?.deviceName || '');



    }, [editData])
    const AddnData = (e) => {



    }


    // priority setting
    const currencies = [
        {
            value: 'High',
            label: 'High',
        },
        {
            value: 'Low',
            label: 'Low',
        },

    ];


    //Text Area
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
    };

    let StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
    width: 440px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 2;
    padding: 16px;
   
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
     border: 1px solid ${theme.palette.mode === 'dark' ? grey[900] : grey[300]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
      }
    `,

    );



    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    Update Task
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: '20px' }} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                label="Task ID "
                                placeholder='Employee ID'
                                variant="outlined"
                                value={deviceName}
                                onChange={(e) => setDeviceName(e.target.value)}

                            /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic" label="Title" placeholder='Task Name' variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker sx={{ width: 520 }} label="Assign Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker sx={{ width: 520 }} label="End Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                            {/* <TextField fullWidth required id="outlined-basic" label="End Date " placeholder='End Date' variant="outlined" /> */}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <StyledTextarea fullWidth required aria-label="Description" label="Description" placeholder="Description" variant="outlined" />
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

                                    label="Priority"
                                    placeholder='Select Priority'
                                // defaultValue="EUR"
                                //helperText="Please set the Priority"
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
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
                            }} onClick={onCancel} variant="contained">Add</Button>
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
