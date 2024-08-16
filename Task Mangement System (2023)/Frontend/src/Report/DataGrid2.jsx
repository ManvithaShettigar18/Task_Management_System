import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'no', headerName: 'NO', type: 'number', width: 90 },
];

const rows = [
    { id: 1, lastName: 'Doe', firstName: 'John', age: 35, no: 4354365 },
    { id: 2, lastName: 'Smith', firstName: 'Jane', age: 28, no: 35678785 },
    { id: 3, lastName: 'Johnson', firstName: 'Bob', age: 45, no: 4568735 },
    { id: 4, lastName: 'John', firstName: 'Bob', age: 75, no: 34565688 },
    // Add more rows as needed
];

function SimpleDataGrid() {
    return (
        <div style={{ marginTop: 50, marginLeft: 200, height: 200, width: '70%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
}

export default SimpleDataGrid;
