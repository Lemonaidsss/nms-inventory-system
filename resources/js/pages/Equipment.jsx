import React,{ useState,useEffect } from 'react';
import { Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    createTheme,
    ThemeProvider
 } from '@mui/material';
import axios from 'axios';


export default function(){
const [items, setEquipment] = useState([]);
console.log('items succesfuly loaded')

 const fetchEquipment = async () => {
    console.log('items succesfuly loaded')
    const res = await axios.get('/items');

     if(res.status === 200){
        console.log('result', res.data)
        setEquipment(res.data.data )
     }else{
        console.log(res);
     }
   };

    useEffect(()=> {
     fetchEquipment();
    },[]);

    const theme = createTheme({
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

    return (
        <Table sx={{ minWidth: 100 }} style={{ margin: 80 }}>
          <TableHead>
            <TableRow>
            <ThemeProvider theme={theme}>
              <TableCell>SKU</TableCell>
              <TableCell>Stock Status</TableCell>
              <TableCell>Sub Category</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Equipment Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit</TableCell>
              </ThemeProvider>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.category}>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.stock_status}</TableCell>
                <TableCell>{row.subcat}</TableCell>
                <TableCell>{row.img}</TableCell>
                <TableCell>{row.item_name}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.unit}</TableCell>
              </TableRow>
            ))}
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




