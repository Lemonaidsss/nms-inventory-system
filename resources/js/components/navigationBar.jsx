import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Box,
    Divider,
    Grid,
    Typography,
    AppBar,
    Toolbar
} from '@mui/material';
import { Blender, Person, SoupKitchen, Settings, Dehaze } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function () {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const sideList = (

        <List>
            <ListItem button component={Link} to="/Perishables">
                <ListItemIcon>
                    <SoupKitchen color="error" />
                </ListItemIcon>
                <ListItemText primary="Perishables" />
            </ListItem>
            <ListItem button component={Link} to="/Equipment">
                <ListItemIcon>
                    <Blender color="error" />
                </ListItemIcon>
                <ListItemText primary="Equipment" />
            </ListItem>
            <ListItem button component={Link} to="/InventorySettings">
                <ListItemIcon>
                    <Settings color="error" />
                </ListItemIcon>
                <ListItemText primary="Inventory Settings" />
            </ListItem>
            <ListItem button component={Link} to="/Users">
                <ListItemIcon>
                    <Person color="error" />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
        </List>
    );


    const theme = createTheme({
        palette: {
            primary: {
                main: '#00000',
                contrastText: '#ffffff',
            },
            text: {
                primary: '#ffffff',
                fontSize: 22,
                fontWeight: 'bold'
            },
            background: {
                paper: '#000000',
            },
            action: {
                hover: '#ff0000',
            },
        },
    });

    return (

        <ThemeProvider theme={theme}>
            <Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed">
                        <Toolbar variant="dense">
                            <IconButton onClick={handleToggle}><Dehaze color="error" /> </IconButton>
                            <Typography variant="body2" >
                                BEST SUPERMARKET IN SOMALIA
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>

                <Drawer anchor="left" open={isOpen} onClose={handleToggle}>
                    <IconButton onClick={handleToggle}><Dehaze color="error" /> </IconButton>
                    <Box sx={{ p: 1 }}>
                        {sideList}
                        <Divider />
                        <Grid container direction="column" justifyContent="flex-end" sx={{ p: 1 }}>
                            <Typography variant="body2" color="error">
                                version: sheeeeeeeeeeeeeeesh
                            </Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Box>
                </Drawer>
            </Fragment>
        </ThemeProvider>
    );
}

