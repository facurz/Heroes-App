import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import { ThemeProvider } from "@mui/material";
import { theme} from './theme'

import 'animate.css';

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
            </AuthProvider>
        </>
    );
};
