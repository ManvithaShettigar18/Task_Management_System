import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, MenuItem, Card, CardHeader, CardContent, Typography } from '@mui/material';
import { EmpShowData } from "../ApiService";
import { MyData } from "../ApiService";
import ApplicationStore from '../ApplicationService';
import DetailsReviewToolBar from "./detailsviewToolbar";
import RequestMessage from "./RequestMessage";

const AddEmpolyee = ({ open, setOpen, setRefreshData }) => {

    const [editData, setEditData] = useState([]);

    // const [isLoading, setGridLoading] = useState(true);
    // const [rows, setRows] = useState([]);
    // const [refreshData, setRefreshData] = useState(false);
    const [isAddButton, setIsAddButton] = useState(true);





    const { id, Name, email, Contact } = ApplicationStore().getStorage('userDetails');

    console.log("id-data", id);
    console.log("empname", Name);

    console.log("empname", email);
    console.log("empname", Contact);












    return (
        // <Card
        //     sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
        //     maxWidth="lg"

        // >
        //     <CardHeader title="My Details" ></CardHeader>
        //     <form >

        //         <DialogContent>

        //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        //                 <label>NAME:</label>

        //             </Grid>
        //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

        //                 <label>Email:</label>


        //             </Grid>
        //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        //                 <label>Contact:</label>
        //             </Grid>
        //             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        //                 <label>userId:</label>

        //             </Grid>

        //         </DialogContent>

        //     </form>

        // </Card>




        <Grid>

            <Card sx={{ minWidth: "50%", marginRight: "auto", marginLeft: "auto", color: "white", width: "100px", height: "300px" }}>
                <div style={{ marginTop: 10 }}>

                    <div style={{ color: "white" }} >

                        <CardHeader sx={{ bgcolor: "blue", textAlign: 'start', }}
                            title="MY DETAILS"
                        />
                    </div>


                </div>


                <CardContent
                    id=''>
                    {/* <div /> */}
                    <Grid container sx={{}}>
                        <Grid item xs={12} spacing={2}>
                            <TextField sx={{ marginBottom: 1 }} fullWidth required id="outlined-basic2" label="Name" placeholder='Name' variant="outlined" value={Name}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField sx={{ marginBottom: 1 }} fullWidth required id="outlined-basic2" label="Email" variant="outlined" type='email' value={email}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField sx={{ marginBottom: 1 }} fullWidth required id="outlined-basic2" label="Contact" placeholder='Contact' variant="outlined" type='email' value={Contact}
                            ></TextField>
                        </Grid>
                    </Grid>
                    {/* </div> */}




                </CardContent>
                {/* <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" sx={{ bgcolor: "#6F61C0" }} size="small" onClick={SubTaskStart} disabled={isButtonDisable}>Start</Button>
                                <Button variant="contained" sx={{ bgcolor: "#6F61C0" }} size="small">Complete</Button>
                            </CardActions> */}
            </Card>

            <Grid sx={{ paddingLeft: 80, mt: 20 }}>



                <DetailsReviewToolBar
                    setIsAddButton={setIsAddButton}
                    setEditData={setEditData}
                    setOpen={setOpen}

                />

            </Grid>

            <RequestMessage
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}


            />

        </Grid >


    )
}

export default AddEmpolyee;
