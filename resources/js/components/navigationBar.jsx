import React, { Fragment } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Typography,
  CssBaseline,
  List,
  Toolbar,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Logo from "/resources/images/nms-logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Blender, Person, SoupKitchen, Settings, Dashboard, ShoppingCartCheckout, AddShoppingCart } from '@mui/icons-material';

export default function () {

  const drawerWidth = 230;

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

  const sideList = (

    <List >
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <Dashboard color="error" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/Perishables">
        <ListItemIcon>
          <SoupKitchen color="error" />
        </ListItemIcon>
        <ListItemText primary="Perishables List" />
      </ListItem>
      <ListItem button component={Link} to="/Equipment">
        <ListItemIcon>
          <Blender color="error" />
        </ListItemIcon>
        <ListItemText primary="Equipments List" />
      </ListItem>
      <Divider sx={{ margin: 2 }} />
      <ListItem button component={Link} to="/PurchaseRequests">
        <ListItemIcon>
          <AddShoppingCart color="error" />
        </ListItemIcon>
        <ListItemText primary="Purchase Requests" />
      </ListItem>
      <ListItem button component={Link} to="/PurchaseOrders">
        <ListItemIcon>
          <ShoppingCartCheckout color="error" />
        </ListItemIcon>
        <ListItemText primary="Purchase Orders" />
      </ListItem>
      <Divider sx={{ margin: 2 }} />
      <ListItem button component={Link} to="/InventorySettings">
        <ListItemIcon >
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

  const mytheme = createTheme({
    palette: {

      mode: 'dark',

      primary: {
        main: '#00000',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#D62929',
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
        hover: '#b50d07',
      },
    },

  });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <ThemeProvider theme={mytheme}>
      <Fragment>
        <Box >
          <CssBaseline />
          <AppBar position="fixed" open={open} >
            <Toolbar>
              <IconButton
                color="#D62929"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon color='secondary' />
              </IconButton>
              <Box
                component="img"
                sx={{
                  height: 30,
                }}
                alt="Your logo."
                src={Logo}
                margin="5px"
              />
              <Typography variant="h6" noWrap component="div" color="white" margin="10px" fontWeight="bold">
                Kitchen Inventory System
              </Typography>

              <Button color="inherit" sx={{
                marginLeft: "auto",
                ":hover": {
                  bgcolor: "#b50d07",
                  color: "white"
                }
              }} variant="text">Logout</Button>
            </Toolbar>
            <Divider color='#D62929' sx={{ height: 5, width: 'auto' }} />
          </AppBar>
        </Box>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} color='secondary'>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Box  >
            <Divider />
            {sideList}
          </Box>
        </Drawer>
      </Fragment>
    </ThemeProvider>

  );
}

