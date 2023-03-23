import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

function MainTheme(): Theme {
    return createTheme({
        palette: {
            primary: {
                main: "#1966d3",
            },
            secondary: {
                main: "#9a9ca0",
            }
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

            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        height: "1.5rem"
                    },
                    label: {
                        paddingBlock: "1.0625rem"
                    }
                }
            }
        }
    });
}

export default MainTheme;