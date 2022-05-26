/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Grid, Image, Img, Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function Header(){
    return(
    <Flex position={["fixed", "fixed", "fixed", "static"]} zIndex="1" opacity="1" top="0" bg="#FFFFFF" borderBottom="1px solid rgba(0, 0, 0, 0.2)" height={"4rem"} width="100%" alignItems="center">
        <Flex width={["100%"]} pl="0" ml="0" justifyContent={["space-between"]} flexDirection={["row-reverse", "row-reverse", "row"]}>
            <Box height={'100%'} width="4rem" display={['inline-block', 'inline-block', 'inline-block', 'none']}>
            </Box>
            <Flex justify={'center'} ml={[ "-13rem", "-13rem", "-13rem", "2rem"]} borderRight={["0", "0", "1px solid rgba(0, 0, 0, 0.2)"]} pr={["0", "0", "2rem"]} fontSize="2rem" height="100%" justifyContent={"center"}>
                <Img w="6rem" h="3rem" src='https://static.wixstatic.com/media/f2e346_89d8bd9a24a3422fbe08c5d4e9021030~mv2.jpg' alt="logo"/>
            </Flex>
            <Flex borderLeft={["0", "0", "1px solid rgba(0, 0, 0, 0.2)"]} mr="2rem" pl={["1rem", "1rem", "2rem"]} gap="10px" alignItems="center" height="100%" width="13.5rem">
                <Avatar bg="#B5F1DD" color="#34423D" name="Luiz Zlochevsky"/>
                <Grid display={["none", "none", "none", "grid"]}>
                    <Text><strong>Luiz Zlochevsky</strong></Text>
                    <p>meus dados</p>
                </Grid>
            </Flex>
        </Flex>
    </Flex>
    )
}