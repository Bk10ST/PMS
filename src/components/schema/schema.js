import * as Yup from "yup";

// validation Yup
export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
    password: Yup.string().required('Password is required').matches(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/, 'Password must contain numbers '),
});