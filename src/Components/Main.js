import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import StockForm from './StockForm';


export default function Main() {

    return (
        <Grid container spacing={2} p={7}>
            <Grid item sm={12}>
                <Typography variant='h4' px={2} pt={4} pb={3} sx={{ textTransform: 'uppercase', fontWeight: "normal" }}>Stock Average Price Calculator</Typography>
                <Divider/>
            </Grid>
            <StockForm />
           

        </Grid>
    )
}