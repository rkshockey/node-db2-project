const yup = require('yup')

module.exports = yup.object().shape({
    vin: yup.string()
        .required('vin is missing'),
    make: yup.string()
        .required('make is missing'),
    model: yup.string()
        .required('model is missing'),
    mileage: yup.number()
        .require('mileage is missing'),
    title: yup.string(),
    transmission: yup.string()
});