import { Login } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = () => {
        login('Facu Riva');

        navigate('/', {
            replace: true,
        });
    };

    return (
        <div className='login '>
            <h1 className='logo'>Heroes App</h1>

            <hr/>

            <Button variant='contained' color='primary' onClick={onLogin} endIcon={<Login />}>
                Login
            </Button>
        </div>
    );
};
