import * as Yup from 'yup';
import React, { useState } from 'react';
import axios from 'axios';

import { Button, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const SignUpForm = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const toast = useToast();

    const handleClick = () => setShow(!show);

    const handleSignUp = async (values, { setSubmitting }) => {
        const { email, password } = values;
        try {
            await new Promise((resolve) => setTimeout(resolve));
            toast({
                title: 'Account Created',
                description: 'We have created a new account!',
                status: 'success',
                duration: 9000,
                position: 'bottom-right',
                isClosable: true,
            });
            navigate('/');

            const response = await axios.post('http://localhost:8080/register', { email, password });
            console.log(response.data);

        } catch (error) {
            console.error('Sign Up failed:', error);
            toast({
                title: 'Sign Up Failed',
                description: 'An error occurred while signing up. Please try again later.',
                status: 'error',
                duration: 9000,
                position: 'bottom-right',
                isClosable: true,
            });
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: '',
                rememberMe: false,
            }}
            validationSchema={Yup.object({
                userName: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email address').required('Required').matches(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/, 'Email must contain numbers '),
                password: Yup.string().required('Required').matches(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/, 'Password must contain numbers '),
                rememberMe: Yup.boolean(),
            })}
            onSubmit={handleSignUp}
        >
            <Form>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <Field name="userName" as={Input} placeholder="Username" />
                    <ErrorMessage name="userName" component="div" className="error text-danger d-flex justify-content-end" />
                </div>
                <div className="pt-1">
                    <label htmlFor="email">Email:</label>
                    <Field name="email" type="email" as={Input} placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error text-danger d-flex justify-content-end" />
                </div>
                <div className="pt-1">
                    <label htmlFor="password">Password:</label>
                    <InputGroup size="md">
                        <Field name="password">
                            {({ field }) => (
                                <Input {...field} pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
                            )}
                        </Field>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <ErrorMessage name="password" component="div" className="error text-danger d-flex justify-content-end" />
                </div>
                <Button type="submit" colorScheme="" className="w-100 mt-4 btn-login" borderRadius="none" fontSize="14px">
                    Sign Up
                </Button>
                <Link to="/login">
                    <h6 className="mt-3 signUp">Login</h6>
                </Link>
            </Form>
        </Formik>
    );
};
