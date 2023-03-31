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

export default function () {
    const [users, setUsers] = useState([]);
    console.log('aasd', users)

    const fetchUsers = async () => {
        console.log('asd')
        const res = await axios.get('/users');

        if (res.status === 200) {
            console.log('result', res)
            setUsers(res.data.data)
        } else {
            console.log(res);
        }
    };

    useEffect(() => {
        fetchUsers();
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

        <Table sx={{ minWidth: 60 }} style={{ margin: 60 }}>
            <TableHead>
                <TableRow>
                    <ThemeProvider theme={headTheme}>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Role</TableCell>
                    </ThemeProvider>
                </TableRow>
            </TableHead>
            <TableBody>
                <ThemeProvider theme={bodyTheme}>
                    {users.map((row) => (
                        <TableRow key={row.code}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.role}</TableCell>
                        </TableRow>
                    ))}
                </ThemeProvider>
            </TableBody>
        </Table>
    );
}

//    return (
//        <Fragment>
//            <Typography variant="h4">users</Typography>
//            <hr />
//            {users.map((aUser, aUserIndex) => {
//                return <p key={aUserIndex}>{aUser.id}</p>
//            })}
//        </Fragment>)
//}