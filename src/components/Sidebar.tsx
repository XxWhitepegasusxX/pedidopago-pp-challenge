import { Box } from "@chakra-ui/react";


export default function Sidebar(){
    return(
        <Box display={["none", "none", "none", "none", "none", "grid"]} position="absolute" as="aside" w="64" h="100%" mr="8" bg="#FFFFFF" borderRight="1px solid rgba(0, 0, 0, 0.2)">

        </Box>
    )
}