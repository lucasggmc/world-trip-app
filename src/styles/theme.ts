import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            50: '#F5F8FA',
            200: '#DADADA',
            400: '#999999',
            600: '#47585B'            
        }, 
        highlight: '#FFBA08'
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.600'
            }
        }
    }
})