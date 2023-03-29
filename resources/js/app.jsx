import { Grid } from '@mui/material';
import React from "react";
import LeftNavigationBar from "./components/leftNavigationBar";
import Equipment from './pages/Equipment';



export default function () {
    return <Grid container spacing={2}>
  <Grid item xs={2} md={8}>
    <LeftNavigationBar />
  </Grid>
  
    <Equipment />

</Grid>
}