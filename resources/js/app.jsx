import { Grid } from '@mui/material';
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/navigationBar";
import Perishables from './pages/Perishables';
import Equipment from './pages/Equipment';
import InventorySettings from './pages/inventorySettings';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';


export default function () {
    return (
        <Fragment>
            <BrowserRouter>

                <Grid container spacing={2}>
                    <Grid item xs={2} md={8}>
                        <NavigationBar />
                    </Grid>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/Equipment" element={<Equipment />} />
                        <Route path="/Perishables" element={<Perishables />} />
                        <Route path="/InventorySettings" element={<InventorySettings />} />
                        <Route path="/Users" element={<Users />} />
                    </Routes>
                </Grid>
            </BrowserRouter>
        </Fragment>
    )
}





