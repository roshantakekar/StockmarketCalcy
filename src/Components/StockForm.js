import { Paper, Typography, Button, TextField, Grid, Divider, FormHelperText, Box } from "@mui/material"
import { Stack } from "@mui/system";
import { Formik, Form, Field } from 'formik';
import { useState } from "react";
import validationCalculatorSchema from '../schema/validationCalculatorSchema';

export default function StockForm(props) {

    const [fitTotal1, setFitTotal1] = useState(null);
    const [fitTotal2, setFitTotal2] = useState(null);
    const [formValid, setFormValid] = useState(false);
    const [resultData, setResultData] = useState({
        totalUnits: '',
        averagePrice: ''
    })
    const initialValues = {
        units1: '',
        price1: '',
        units2: '',
        price2: ''
    };

    const handleSubmit = (data) => {
        debugger
        setFitTotal1(JSON.parse(data.units1) * JSON.parse(data.price1));
        setFitTotal2(JSON.parse(data.units2) * JSON.parse(data.price2));
        setFormValid(true);
        const totalUnits = JSON.parse(data.units1) + JSON.parse(data.units2);
        const averagePrice = (JSON.parse(data.price1) + JSON.parse(data.price2)) / 2;


        setResultData((prev) => {
            return {
                ...prev,
                // eslint-disable-next-line
                ["totalUnits"]: totalUnits,
                // eslint-disable-next-line
                ["averagePrice"]: averagePrice
            }
        })

        debugger;
    }
    return (
        <>
            <Grid item sm={6}>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationCalculatorSchema}
                    onSubmit={handleSubmit}
                >
                    {
                        (props) => {
                            return (

                                <Form noValidate>
                                    <Grid container spacing={4}  >
                                        <Grid item sm={12}>
                                            <Paper elevation={2} sx={{ p: 5 }}  >
                                                <Typography variant="h5" mb={2}>First Investment</Typography>

                                                <Field as={TextField} fullWidth name="units1" label="Units" variant="outlined" />
                                                <Typography sx={{ mb: 2 }}>{props.errors.units1}</Typography>
                                                <Field as={TextField} fullWidth name="price1" label="Price" variant="outlined" />
                                                <Typography sx={{ mb: 2 }}>{props.errors.price1}</Typography>
                                                {formValid && <Box>
                                                    <Divider />
                                                    <FormHelperText>Amount Invested: {fitTotal1}</FormHelperText>
                                                </Box>}
                                            </Paper>
                                        </Grid>
                                        <Grid item sm={12}>

                                            <Paper elevation={2} sx={{ p: 5 }} >
                                                <Typography variant="h5" mb={2}>Second Investment</Typography>
                                                <Field as={TextField} fullWidth name="units2" label="Units" variant="outlined" />
                                                <Typography sx={{ mb: 2 }}>{props.errors.units2}</Typography>
                                                <Field as={TextField} fullWidth name="price2" label="Price" variant="outlined" />
                                                <Typography sx={{ mb: 2 }}>{props.errors.price2}</Typography>
                                                {formValid && <Box>
                                                    <Divider />
                                                    <FormHelperText>Amount Invested: {fitTotal2}</FormHelperText>
                                                </Box>}
                                            </Paper>
                                        </Grid>

                                        <Grid item sm={12} sx={{ textAlign: "center" }}>
                                            <Button size="large" color="secondary" variant='contained' type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                </Form>


                            )
                        }
                    }
                </Formik>
            </Grid>
            {formValid &&
                <Grid item sm={6}>

                    <Paper  sx={{ padding: "10%",background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }} elevation={4}>
                        <Stack>
                            <Typography variant="h6" mb={3}>Total Units <Typography variant="h4" sx={{fontWeight:'bold'}}>{resultData.totalUnits}</Typography></Typography>
                            <Typography variant="h6" mb={3}>Average Price <Typography variant="h4" sx={{fontWeight:'bold'}}>{resultData.averagePrice}</Typography></Typography>
                            <Typography variant="h6" >Total Amount <Typography variant="h4" sx={{fontWeight:'bold'}}>{fitTotal1+fitTotal2}</Typography></Typography>
                        </Stack>

                    </Paper>

                </Grid>
            }
        </>
    )


}