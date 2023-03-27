import { Grid } from '@mui/material';
import React from "react";
import RightContentWrapper from "./components/rightContentWrapper";
import TopNavigationBar from "./components/topNavigationBar";



export default function () {
    return <Grid container spacing={2}>
  <Grid item xs={2} md={8}>
    <RightContentWrapper />
  </Grid>
  <Grid item xs={12} md={4}>
    <TopNavigationBar />
  </Grid>
</Grid>
}