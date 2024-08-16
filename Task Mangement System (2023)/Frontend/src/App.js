
import './App.css';
//import Signin from "./login";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/sidebar";
//import Homepage from "./components/Homepage";
import EmpDetails from "./Employee/empDetails";
import TaskDetails from "./Task/taskDetails";
// import TaskAssign from "./Assignment/TaskAssign";
import AssignEmployee from "./Assignment/EmployeeAssignDetails";

import Dashboard from "./Dashboard/dashboardGrid";
import LoginPage from "./Login/login";

import DetailsReview from "./EmployeeSide/detailsReview";
import File from "./components/file";



//Employee
import EmpSideBar from "./components/empSidebar";
import EmpDashboard from "./EmployeeSide/empDashboard";

//SubTAsk
import SubTaskDetails from "./SubTask/subTaskDetails";
import SubTaskAssign from "./Assignment/subTaskAssign";
import Sutaskdd from "./Assignment/subtaskAssignEmp";

//Report
import Report from "./Report/Report";
import DropDown from "./Report/Dropdown";


//Remaining Employee
import RemainingEmployee from "./RemainEmployeeAdd/RemainingEmpDetails";


function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      {/* <File /> */}

      {/* < Sutaskdd /> */}

      <Router>

        <Routes>

          <Route path="/" element={<LoginPage />}></Route>




          <Route path="/Sidebar" element={<Sidebar />}></Route>

          <Route path="/empdetails" element={<Sidebar content={<EmpDetails />} />} ></Route>
          <Route path="/taskdetails" element={<Sidebar content={<TaskDetails />} />} ></Route>

          <Route path="/AssignEmployee" element={<Sidebar content={<AssignEmployee />} />} ></Route>
          <Route path="/Dashboard" element={<Sidebar content={<Dashboard />} />} ></Route>
          <Route path="/SubTaskDetails" element={<Sidebar content={<SubTaskDetails />} />} ></Route>
          <Route path="/SubTaskAssign" element={<Sidebar content={<SubTaskAssign />} />} ></Route>
          <Route path="/Report" element={<Sidebar content={<Report />} />} ></Route>

          <Route path="/RemainingEmployee" element={<Sidebar content={<RemainingEmployee />} />} ></Route>






          <Route path="/EmpSidebar" element={<EmpSideBar />}></Route>
          <Route path="/EmpDashboard" element={<EmpSideBar content={<EmpDashboard />} />} ></Route>
          <Route path="/DetailsReview" element={<EmpSideBar content={<DetailsReview />} />} ></Route>



        </Routes>
      </Router >

      {/* <DropDown /> */}

    </div >

    //  
  );
}

export default App;
