import * as React from 'react';
import {
  Box,
  Toolbar,
  Button,
  TextField,
  Divider,
  InputAdornment,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Delete, EditRounded } from '@mui/icons-material';

const columns = [
  {
    field: 'id',
    headerName: 'SKU',
    
    headerClassName: 'headercolor',
    flex: 1,
    type: 'number',
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'headercolor',
    editable: true,
    flex: 1,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'image',
    headerName: 'image',
    headerClassName: 'headercolor',
    editable: true,
    flex: 1,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'itemName',
    headerName: 'Item Name',
    headerClassName: 'headercolor',
    flex: 1,
    editable: true,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'subCategory',
    headerName: 'Sub Category',
    headerClassName: 'headercolor',
    flex: 1,
    editable: true,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    headerClassName: 'headercolor',
    flex: 1,
    type: 'number',
    editable: true,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'unit',
    headerName: 'Unit',
    headerClassName: 'headercolor',
    flex: 1,
    editable: true,
    align: 'center',
    headerAlign: 'center'
  },

  {
    field: "Action",

    headerAlign: 'center',
    headerClassName: 'headercolor',
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <Box sx={{ margin: 'auto' }}>
          <IconButton>
            <EditRounded sx={{ color: '#F2541D' }} />

          </IconButton>
          <IconButton>
            <Delete sx={{ color: '#9c0c02' }} />

          </IconButton>

        </Box>
      );
    }
  },

];

const rows = [
  { id: 12332, status: 'out of stock', image: 'Jon', itemName: 'potato', subCategory: 'ewan', quantity: 300, unit: 'kilo' },
  { id: 22121, status: 'in stock', image: 'Cersei', itemName: 'cabbage', subCategory: 'gulay', quantity: 500, unit: 'kilo' },
  { id: 3, status: 'in stock', image: 'Jaime', itemName: 'spaghetti', subCategory: 'pastatata', quantity: 2, unit: 'kilo' },
  { id: 42121, status: 'out of stock', image: 'Arya', itemName: 'sibuyas', subCategory: 'gisasasa', quantity: 677, unit: 'kilo' },
  { id: 5, status: 'out of stock', image: 'Daenerys', itemName: null, subCategory: 'wew', quantity: 34, unit: 'kilo' },
  { id: 6121, status: 'out of stock', image: null, itemName: 'kamatis', subCategory: 'eweew', quantity: 7777, unit: 'kilo', },
  { id: 7, status: 'out of stock', image: 'Ferrara', itemName: 'carbonara', subCategory: 'pastata', quantity: 6666, unit: 'kilo' },
  { id: 82, status: 'out of stock', image: 'Rossini', itemName: 'apple', subCategory: 'fruits', unit: 'kilo' },
  { id: 9, status: 'out of stock', image: 'Harvey', itemName: 'saginging', subCategory: 'sinigangang', quantity: 888, unit: 'kilo' },
];

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
      hover: '#E75650',
    },
  },

});


export default function () {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ACTION BUTTONS
  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };
  return (

    <ThemeProvider theme={mytheme}>
      <Toolbar >

        {/* HEADERNAME COLOR */}
        <Box fullWidth sx={{
          height: 500, '& .headercolor': {
            backgroundColor: '#9c0c02'
          },
        }}
          style={{ minWidth: '90%', margin: 100 }}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Equipments List
            </Typography>
            <Divider width="auto" />

            <Toolbar >


              {/* ----DIALOG ADD ITEM------------------- */}

              <Button sx={{
                fontWeight: 'bold',
                bgcolor: '#9c0c02', ":hover": {
                  bgcolor: "#E75650",
                  color: "white"
                }
              }} variant="outlined" onClick={handleClickOpen}>
                ADD ITEM
              </Button>

              <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { width: "30%", height: "80%" } }}>
                <DialogTitle sx={{ margin: 'auto', fontWeight: 'bold' }}>ADD ITEM</DialogTitle>
                <Divider color='#9c0c02' sx={{ height: 5, width: 'auto' }} />
                <DialogContent >
                  <Grid container direction={"column"} spacing={3}>
                    <Grid item>
                      <TextField id="sku" label="SKU" variant="standard" fullWidth />
                    </Grid>
                    <Grid item>
                      <TextField id="name" label="Item Name" variant="standard" fullWidth />
                    </Grid>
                    <Grid item>
                      <TextField id="Unit" label="Unit of Measurement" variant="standard" fullWidth />
                    </Grid>
                    <Grid item>
                      <TextField id="category" label="Category" variant="standard" fullWidth />
                    </Grid>
                    <Grid item>

                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>


                  <Button sx={{
                    marginBottom: '10px',
                    bgcolor: '#9c0c02', ":hover": {
                      bgcolor: "#E75650",
                      color: "white"
                    },

                  }} onClick={handleClose}>Save Changes</Button>

                  <Button sx={{
                    marginRight: '15px',
                    marginBottom: '10px',
                    bgcolor: '#9c0c02', ":hover": {
                      bgcolor: "#E75650",
                      color: "white"
                    }
                  }} onClick={handleClose}>Cancel</Button>

                </DialogActions>
              </Dialog>



              {/* ------Search Items------- */}
              <Box sx={{ marginLeft: 'auto' }}>
                <TextField
                  id="SearchItem"
                  type="Search"
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" >
                        <SearchIcon sx={{ color: '#9c0c02' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Box>
            </Toolbar>
          </Box>

          <DataGrid sx={{

            border: 0,
            

          }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 9,
                },
              },
            }}
            pageSizeOptions={[9]}
            disableRowSelectionOnClick
            autoHeight={true}
          />

        </Box>
      </Toolbar>
    </ThemeProvider>

  );
}
