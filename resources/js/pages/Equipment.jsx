import React, { useState, useEffect, Fragment } from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    createTheme,
    ThemeProvider,
    Grid
} from '@mui/material';
import axios from 'axios';
import NavigationBar from '../components/navigationBar';


//check
export default function () {
    const [items, setEquipment] = useState([]);
    console.log('items succesfuly loaded')

    const fetchEquipment = async () => {
        console.log('items succesfuly loaded')
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

    const headTheme = createTheme({
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
    const bodyTheme = createTheme({
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
                    <ThemeProvider theme={headTheme}>
                        <TableCell>SKU</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Sub Category</TableCell>
                        <TableCell>Equipment Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit</TableCell>
                    </ThemeProvider>
                </TableRow>
            </TableHead>
            <TableBody>
                <ThemeProvider theme={bodyTheme}>
                    {items.map((row) => (
                        <TableRow key={row.category}>
                            <TableCell>{row.sku}</TableCell>
                            <TableCell>{row.img}</TableCell>
                            <TableCell>{row.subcat}</TableCell>
                            <TableCell>{row.item_name}</TableCell>
                            <TableCell>{row.qty}</TableCell>
                            <TableCell>{row.unit}</TableCell>

                        </TableRow>

                    ))}
                </ThemeProvider>
            </TableBody>
        </Table>
    );
}





// display
//    return (
//    <div>
//    <Typography variant="h6">items</Typography>
//    <hr/>
//    {items.map((aItems, aItemsIndex) => {
//        return <p key={aItemsIndex}>{aItems.subcat}</p>
//    })}
//    </div>
//    )




