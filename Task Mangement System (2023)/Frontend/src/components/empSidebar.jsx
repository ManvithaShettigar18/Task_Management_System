import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';
import TaskIcon from '@mui/icons-material/Task';
//import TableCom from "./TableCom";
// import SpeedIcon from '@mui/icons-material/Speed';
// import WorkIcon from '@mui/icons-material/Work';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonIcon from '@mui/icons-material/Person';
import ReportIcon from '@mui/icons-material/Report';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link, useNavigate } from 'react-router-dom';

import AssignmentIcon from '@mui/icons-material/Assignment';
import ApplicationStore from '../ApplicationService';
import PreviewIcon from '@mui/icons-material/Preview';
import { Logout } from "../ApiService";


const drawerWidth = 240;

const { Name, Role } = ApplicationStore().getStorage('userDetails');
console.log("user---Details000000000000001111111", Role);


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});



const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export default function MiniDrawer(props) {
    const [logout, setLogout] = React.useState();

    let navigate = useNavigate();
    function NavtoDashboard() {
        navigate("/");
    }
    // let navigate1 = useNavigate();

    // function TaskaddClick() {
    //     navigate1("/Taskadd");
    // }










    const theme = useTheme();
    const [open, setOpen] = React.useState(false);



    const handleDrawerOpen = () => {
        setOpen(true);
    };



    const handleDrawerClose = () => {
        setOpen(false);
    };




    const handleLogOut = () => {
        const { token } = ApplicationStore().getStorage('userDetails');

        Logout({ token: token }, Logout1Success, Logout1Exception);

        navigate("/")

    }
    const Logout1Success = (dataObject) => {

        console.log("task-subtask", dataObject);
        setLogout(dataObject);
        //ApplicationStore().setStorage('LoginedEmployee', dataObject);
    }
    const Logout1Exception = (errorObject, errorMass) => {

    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        TASK MANAGEMENT SYSTEM
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'inline' } }}>


                        <IconButton
                            title='Notification'
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            title='User Profile'
                            size="large"
                            edge="end"
                            aria-label="account of current user"

                            aria-haspopup="true"

                            color="inherit"
                        >
                            <Badge color="success" badgeContent=" ">
                                <AccountCircle />
                            </Badge>
                            &nbsp;
                            <div style={{ fontSize: 19 }} >{Name}</div>
                        </IconButton>
                        <IconButton
                            title='Logout'
                            size="large"
                            aria-label="Logout"
                            color="inherit"
                            onClick={() => handleLogOut()}

                        >

                            <LogoutRoundedIcon />

                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to="/EmpDashboard">

                            <ListItemButton onClick={NavtoDashboard}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IconButton><SpaceDashboardIcon /></IconButton>

                                </ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} >Dashboard</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to="/DetailsReview">
                            <ListItemButton

                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >

                                    <IconButton><PreviewIcon /></IconButton>

                                </ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} >My Details</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>




                </List>
                {/* 
                   
                {/* <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to="/empdetails">
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IconButton>< PersonIcon /></IconButton>

                                </ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} >Employee</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
 */}



                {/* <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to="/AssignEmployee">
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IconButton><AssignmentIcon /></IconButton>

                                </ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} >Assignment</ListItemText>

                            </ListItemButton>
                        </Link>
                    </ListItem>
 */}






                {/* 
                    <ListItem disablePadding sx={{ display: 'block' }}>

                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <IconButton><ReportIcon /></IconButton>

                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} >Report</ListItemText>
                        </ListItemButton>
                    </ListItem> */}



                {/* <Divider />
<List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
<ListItem key={text} disablePadding sx={{ display: 'block' }}>
<ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
>
<ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon>
<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
</ListItemButton>
</ListItem>
          ))}
</List> */}

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {props.content}
                {/* <TableCom /> */}

            </Box>
        </Box>
    );
}