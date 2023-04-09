import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        align: 'center',

    },
    {
        field: 'requestDate',
        headerName: 'Request Date',
        width: 200,
        align: 'center',
        valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
        field: 'items',
        headerName: 'Items',
        width: 400,
        align: 'left'
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        editable: true,
        width: 150,
        align: 'center'
    },
    {
        field: 'unitPrice',
        headerName: 'Unit Price',
        width: 180,
        align: 'left',
        //valueFormatter: (params) => '$${params.value.toFixed(2)}',
    },
    {
        field: 'totalPrice',
        headerName: 'Total Price',
        width: 150,
        align: 'right',
        //valueFormatter: (params) => '$${params.value.toFixed(2)}',
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'number',
        width: 180,
        align: 'center',
        valueFormatter: (params) => {
            const status = params.value;
            return status === 'pending' ? 'Pending' : status === 'approved' ? 'Approved' : 'Rejected';
        }
    },
];


// DUMMY DATA NO AXIOS YET 
const rows = [
    { id: 1, requestDate: '4/23/2023' , items: 'Sibuyas tapos tanga', quantity: 35, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 2, requestDate: '4/24/2023' , items: 'Sibuyas tapos yosi', quantity: 66, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 3, requestDate: '4/26/2023' , items: 'Sibuyas tapos mantika', quantity: 666, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 4, requestDate: '4/10/2023' , items: 'Sibuyas tapos vape', quantity: 365, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 5, requestDate: '4/09/2023' , items: 'Sibuyas tapos gtx 1050 ti', quantity: 35, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 6, requestDate: '4/23/2023' , items: 'Sibuyas tapos bangus', quantity: 66, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 7, requestDate: '4/23/2023' , items: 'Sibuyas tapos chuckie', quantity: 35, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 8, requestDate: '4/23/2023' , items: 'Sibuyas tapos meat loaf', quantity: 35, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 9, requestDate: '4/23/2023' , items: 'Sibuyas tapos mang juan', quantity: 3235, unitPrice: 12, totalPrice: 64, status: 'approved'},
    { id: 10, requestDate: '4/23/2023' , items: 'Sibuyas tapos loaded', quantity: 35, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 11, requestDate: '4/23/2023' , items: 'Sibuyas tapos datu puti', quantity: 66, unitPrice: 32, totalPrice: 64, status: 'approved'},
    { id: 12, requestDate: '4/23/2023' , items: 'Sibuyas tapos bawang', quantity: 35, unitPrice: 32, totalPrice: 64, status: 'approved'},
];

export default function purchaseRequests() {
    return (
        <Box sx={{ height: 400, width: '100%' }} style={{ margin: 160 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}