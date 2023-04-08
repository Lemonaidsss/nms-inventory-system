import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    createTheme,
    ThemeProvider,
    Button
} from '@mui/material';
import { Delete, EditRounded } from '@mui/icons-material';
import axios from 'axios';


export default function () {
    // fetch dummy data using axios from backend
    const [items, setEquipment] = useState([]);
    // check if item loaded succesfuly
    console.log('equipment succesfuly loaded')

    const fetchEquipment = async () => {
        console.log('equipment succesfuly loaded')
        const res = await axios.get('/equipment');

        if (res.status === 200) {
            console.log('result', res.data)
            setEquipment(res.data.data)
        } else {
            console.log(res);
        }
    };

    useEffect(() => {
        fetchEquipment();
    }, []);

    const tableHead = createTheme({
        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 16,
                        textAlign: 'center'
                    }
                }
            }
        }
    });
    const tableBody = createTheme({
        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        color: 'black',
                        textAlign: 'center'
                    }
                }
            }
        }
    });

    return (
        <Table sx={{ minWidth: 100 }} style={{ margin: 80 }}>
            <TableHead>
                <TableRow>
                    <ThemeProvider theme={tableHead}>
                        <TableCell>SKU</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Sub Category</TableCell>
                        <TableCell>Equipment Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Actions</TableCell>
                    </ThemeProvider>
                </TableRow>
            </TableHead>
            <TableBody>
                <ThemeProvider theme={tableBody}>
                    {items.map((row) => (
                        <TableRow key={row.category}>
                            <TableCell>{row.stock_keeping_unit}</TableCell>
                            <TableCell>{row.image}</TableCell>
                            <TableCell>{row.sub_category}</TableCell>
                            <TableCell>{row.item_name}</TableCell>
                            <TableCell>{row.quantity}</TableCell>
                            <TableCell>{row.unit}</TableCell>
                            <TableCell>
                                <Button>
                                    <EditRounded button color="warning" />
                                </Button>
                                <Button>
                                    <Delete color="error" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </ThemeProvider>
            </TableBody>
        </Table>
    );
}


