import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    components: {
        Text:{
            variants: {
                active:{
                    display: "flex",
                    justifyContent: "center",
                    bg: '#B5F1DD',
                    borderRadius: "1rem",
                    padding: "0.25rem 1rem"
                },
                inactive: {
                    display: "flex",
                    justifyContent: "center",
                    bg: '#EAEFED',
                    borderRadius: "1rem",
                    padding: "0.25rem 1rem"
                },
                selected:{
                    borderBottom: "2px solid #3EE4AC"
                }
            }
        },
    },
    styles: {
        global: {
            body: {
                bg:'#E5E5E5',
            }
        }
    }
})