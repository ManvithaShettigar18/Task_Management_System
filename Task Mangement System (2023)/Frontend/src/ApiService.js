//import { data } from 'autoprefixer';
import ApplicationStore from './ApplicationService';


const successCaseCode = [200, 201];

const _fetchService = (PATH, serviceMethod, data, successCallback, errorCallBack) => {
    // const { user_token, userDetails } = ApplicationStore().getStorage('userDetails');
    const END_POINT = 'http://localhost:3001/';

    // https://varmatrix.com/MachoIndustryNew/api/
    //https://varmatrix.com/MachoLatest/api/

    // const { emailId, userRole, companyCode } = userDetails;

    const headers = {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${user_token}`,
        // companyCode: `${companyCode}`,
        // userId: `${emailId}`,
        // userRole: `${userRole}`,
    };
    const body = (serviceMethod === 'GET') || (serviceMethod === 'DELETE') ? {} : { body: JSON.stringify(data) };

    const bodyParameters = {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers,
        ...body,
    };

    const bodyObject = {
        method: serviceMethod,
        ...bodyParameters,
    };

    return fetch(END_POINT + PATH, bodyObject)
        .then((response) => {
            if (successCaseCode.indexOf(response.status) > -1) {
                return response.json();
            }
            // eslint-disable-next-line no-throw-literal
            throw {
                errorStatus: response.status,
                errorObject: response.json(),
            };
        })
        .then((dataResponse) => successCallback(dataResponse))
        .catch((error) => {
            error.errorObject.then((errorResponse) => {
                if (error.errorStatus === 401 && errorResponse.message === 'Unable to access the page, Token Expired') {
                    ApplicationStore().clearStorage();
                    // location.reload();
                }
                errorCallBack(error.errorStatus, errorResponse.message);
            });
        });
};

export const LoginService = (data) => {
    const PATH = 'login';
    const END_POINT = 'http://localhost:3001/';
    const SERVICE_METHOD = 'POST';
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    return fetch(END_POINT + PATH, {
        method: SERVICE_METHOD,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });
};

//Employee
export const DeviceShowData = (successCallback, errorCallBack) => _fetchService('Employee/displyEmployee', 'GET', {}, successCallback, errorCallBack);

//export const TaskShowData = (successCallback, errorCallBack) => _fetchService('Task/addTask', 'POST', {}, successCallback, errorCallBack);
export const EmpShowData = (data, successCallback, errorCallBack) => _fetchService('Employee/addEmployee', 'POST', data, successCallback, errorCallBack);
export const EmpUpdateData = (data, successCallback, errorCallBack) => _fetchService(`Employee/EditEmployee/${data.id}`, 'POST', data, successCallback, errorCallBack);
export const EmpDeleteData = (data, successCallback, errorCallBack) => _fetchService(`Employee/EmpDelete/${data.id}`, 'DELETE', data, successCallback, errorCallBack);




//Task
export const DeviceShowData1 = (successCallback, errorCallBack) => _fetchService('Task/displayTask', 'GET', {}, successCallback, errorCallBack);
export const TaskAdd = (data, successCallback, errorCallBack) => _fetchService('Task/addTask', 'POST', data, successCallback, errorCallBack);
export const TaskUpdateData = (data, successCallback, errorCallBack) => _fetchService(`Task/editTask/${data.id}`, 'POST', data, successCallback, errorCallBack);
export const TaskDeleteData = (data, successCallback, errorCallBack) => _fetchService(`Task/taskDelete/${data.id}`, 'DELETE', data, successCallback, errorCallBack);


//Taskasiign
//export const TaskAssignData = (successCallback, errorCallBack) => _fetchService(`Employee/displyEmployee/${data.id}`, 'GET', {}, successCallback, errorCallBack);
//export const TaskAssign = (data, successCallback, errorCallBack) => _fetchService('Employee/AssignEmployee', 'GET', data, successCallback, errorCallBack);
export const EmpListData = (successCallback, errorCallBack) => _fetchService('Employee/displyemployeesOnly', 'GET', {}, successCallback, errorCallBack);
export const TaskListData = (successCallback, errorCallBack) => _fetchService('Task/displayTask', 'GET', {}, successCallback, errorCallBack);
export const EmpUpdate = (data, successCallback, errorCallBack) => _fetchService(`Employee/AssignTaskEmployee`, 'POST', data, successCallback, errorCallBack);

export const SingleTasktoEmployee = (successCallback, errorCallBack) => _fetchService('Task/singleTasktoEmployee', 'GET', {}, successCallback, errorCallBack);

export const SingleEmployee = (successCallback, errorCallBack) => _fetchService('Employee/singlEmployee', 'GET', {}, successCallback, errorCallBack);


//Dashboard
export const Dashboard = (successCallback, errorCallBack) => _fetchService('Task/Dashboard', 'GET', {}, successCallback, errorCallBack);

//Login
export const LoginPage = (data, successCallback, errorCallBack) => _fetchService(`Login/Login`, 'POST', data, successCallback, errorCallBack);
//export const Logintokendata = (successCallback, errorCallBack) => _fetchService(`Login/Login`, 'GET', {}, successCallback, errorCallBack);
export const Logout = (data, successCallback, errorCallBack) => _fetchService(`Login/Logout`, 'POST', data, successCallback, errorCallBack);



//employee dashboard

export const EmpDashboard = (data, successCallback, errorCallBack) => _fetchService(`Task/emp1task`, 'POST', data, successCallback, errorCallBack);
//subTask/EmpDashordwithSubtask
export const EmpsubtaskDashboard = (data, successCallback, errorCallBack) => _fetchService(`subTask/EmpDashordwithSubtask/${data.id}`, 'POST', data, successCallback, errorCallBack);


//SubTask
export const SubTask = (successCallback, errorCallBack) => _fetchService('subTask/displySubTask', 'GET', {}, successCallback, errorCallBack);
export const TaskNameData = (successCallback, errorCallBack) => _fetchService('Task/displayTask', 'GET', {}, successCallback, errorCallBack);

export const AddSubTask = (data, successCallback, errorCallBack) => _fetchService('subTask/addSubTask', 'POST', data, successCallback, errorCallBack);

export const SubTaskUpdate = (data, successCallback, errorCallBack) => _fetchService(`subTask/updateSubTask/${data.id}`, 'POST', data, successCallback, errorCallBack);
//SubtaskDelete
export const SubTaskDelete = (data, successCallback, errorCallBack) => _fetchService(`subTask/SubtaskDelete/${data.id}`, 'DELETE', data, successCallback, errorCallBack);


export const SubtaskasgintoTask = (data, successCallback, errorCallBack) => _fetchService(`subTask/subtaskasgintoTask/${data.id}`, 'POST', data, successCallback, errorCallBack);
export const SubtaskAllData = (successCallback, errorCallBack) => _fetchService('subTask/subtaskAllData', 'GET', {}, successCallback, errorCallBack);

export const SubtaskasgintoTaskandEmployee = (data, successCallback, errorCallBack) => _fetchService(`subTask/SubtaskasgintoTaskandEmployee/${data.id}`, 'POST', data, successCallback, errorCallBack);


export const UpdateEmployeeToSubtask = (data, successCallback, errorCallBack) => _fetchService(`subTask/UpdateEmployeeToSubtask/${data.id}`, 'POST', data, successCallback, errorCallBack);
export const ChangeEmployeeinSubtask = (data, successCallback, errorCallBack) => _fetchService(`subTask/UpdateEmployeeToSubtask/${data.id}`, 'POST', data, successCallback, errorCallBack);


//subtask started

export const AddTaskStartData = (data, successCallback, errorCallBack) => _fetchService(`taskHandle/addTaskStartData`, 'POST', data, successCallback, errorCallBack);
//subtask complete:

export const UpdatetaskComplete = (data, successCallback, errorCallBack) => _fetchService(`taskHandle/UpdatetaskComplete/${data.subtaskId}`, 'POST', data, successCallback, errorCallBack);



//taskCompleted Data Report

export const DisplyCompletedTaskData = (successCallback, errorCallBack) => _fetchService('taskHandle/displyCompletedTask', 'GET', {}, successCallback, errorCallBack);
export const DisplyCompletedTaskDataReport = (data, successCallback, errorCallBack) => _fetchService('taskHandle/displyCompletedTask/' + data, 'GET', {}, successCallback, errorCallBack);

//empdata message


//empnotification / addNotification
export const MyData = (data, successCallback, errorCallBack) => _fetchService(`employee/DisplymyData/${data.id}`, 'POST', data, successCallback, errorCallBack);
//emplnotfy/sedRequest
export const SendRequestMessage = (data, successCallback, errorCallBack) => _fetchService('empnotification/addNotification', 'POST', data, successCallback, errorCallBack);

//SubDashboard
export const SubDashboardGrid = (data, successCallback, errorCallBack) => _fetchService(`taskHandle/displaysubDashboardData`, 'POST', data, successCallback, errorCallBack);

export const PieChartSubDashboard = (data, successCallback, errorCallBack) => _fetchService(`taskHandle/calculateSubtaskPercentages`, 'POST', data, successCallback, errorCallBack);

//Remaining Employee

export const RemainingEmployee = (successCallback, errorCallBack) => _fetchService('employee/RemainingEmployee', 'GET', {}, successCallback, errorCallBack);
