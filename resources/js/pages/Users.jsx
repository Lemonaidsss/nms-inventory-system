import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    createTheme,
    ThemeProvider,
    Button,
    TextField,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    MenuItem
} from '@mui/material';
import { create } from 'apisauce'
import { Delete, EditRounded } from '@mui/icons-material';

const api = create ({
    baseURL: '/',
    headers: {'Accept': 'application/json'}
});

export default function () {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        console.log('asd')
        const res = await api.get('/users');

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

    //TableHead design
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
    //TableBody design
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

    //Edit Dialog
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //hardcoded roles list
    const roles = [
        { value: 'Kitchen Manager', label: 'Kitchen Manager' },
        { value: 'Purchase Officer', label: 'Purchase Officer' },
        { value: 'Kitchen Staff', label: 'Kitchen Staff' }
    ];

    const [selectedOption, setSelectOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectOption(event.target.value);
    };

    return (
        <>
            <Table sx={{ minWidth: 100 }} style={{ margin: 80 }} >
                <TableHead>
                    <TableRow>
                        <ThemeProvider theme={tableHead}>
                            <TableCell>ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </ThemeProvider>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <ThemeProvider theme={tableBody}>
                        {users.map((row) => (
                            <TableRow key={row.code}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={handleClickOpen}>
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
            <>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit User Credentials</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Username"
                            type="name"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            select
                            label="Select a role"
                            id="roles"
                            value={selectedOption}
                            onChange={handleOptionChange}
                            variant="standard"
                            fullWidth
                         >
                            { roles.map((roles) => (
                                <MenuItem key={roles.value} value={roles.value}>
                                    {roles.label}
                                </MenuItem>
                            ))}
                         </TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Save Changes</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </>
        </>
    );
}
~`~`