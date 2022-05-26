//Imports
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Card from "../components/Card";

//Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Users from "../components/Colaboradores/Users";


export default function Home() {
  return (
    <>
    <main>
      <Grid justifyContent={["left", "left", "center", "center"]} ml={["1rem", "1rem", "4rem", "4rem"]} mt={["6.7rem", "6.7rem", "4rem", "4rem"]}>
        <Text display={["none", "none", "inline-block", "inline-block"]} as="h1" fontSize="2rem">Organização</Text>
        <Text display={["inline-block", "inline-block", "none", "none"]} as="h1" fontSize="2rem">Colaboradores</Text>
        <Card/>
      </Grid>
    </main>
    </>
  )
}
