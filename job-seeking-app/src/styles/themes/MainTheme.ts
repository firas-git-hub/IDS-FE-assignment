import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

function MainTheme(): Theme {
    return createTheme({
        palette: {
            primary: {
                main: "#1966d3",
            },
            secondary: {
                main: "#000000",
            },
        },
        typography: {
            fontFamily: [
                'JostRegular',
                'Roboto',
                'Arial',
                'sans-serif'
            ].join(','),
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                },
                
            }
        }
    });
}

export default MainTheme;