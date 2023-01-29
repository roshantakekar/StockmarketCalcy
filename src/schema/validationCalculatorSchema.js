import * as Yup from 'yup';
const validationCalculatorSchema=Yup.object().shape({
    units1:Yup.number().required('Units Required!'),
    price1:Yup.number().required('Price Required!'),
    units2:Yup.number().required('Units Required!'),
    price2:Yup.number().required('Price Required!'),
});
export default validationCalculatorSchema;
