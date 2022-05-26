/* eslint-disable react/no-children-prop */
//Chakra-UI
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Grid, Input, InputGroup, InputLeftElement, Select, Text } from '@chakra-ui/react'

//Importações React
import { useState } from 'react'
import Cargos from './Cargos/Cargos'
import Users from './Colaboradores/Users'


const Card = () => {
    const response = () =>{
        if(active === "colaboradores"){
            return <Users/>
        }else{
            return <Cargos/>
        }
    }
    
    const [active, setActive] = useState("colaboradores")
//Para Fazer a Responsividade, criei um elemento para cada caso de tela,
    return(
        <Box>
        <Box display={["none", "none", "inline-block", "inline-block"]}  w={["980px"]} maxW="980px" mt="1.5rem" bg="#FFFFFF">
            <Flex width="95%" mx="auto" pt="4rem" justifyContent="left">
                <Text cursor="pointer" px="2rem" variant={active === "colaboradores" ? "selected" : ""} onClick={()=> setActive("colaboradores")} as="h3">Colaboradores</Text>
                <Text cursor="pointer" px="2rem" variant={active === "cargos" ? "selected" : ""} onClick={()=> setActive("cargos")} as="h3">Cargos</Text>
            </Flex>
            <Flex w="95%" mx="auto" borderTop="1px solid rgba(0, 0, 0, 0.2)" pt="2.5rem" mb="2.5rem" justifyContent="center">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.400' />}
                />
                <Input type='text' placeholder={active === "colaboradores" ? "Pesquise por nome ou CPF" : "Pesquise por cargos" } />
            </InputGroup>
            </Flex>
            <Text mb="2.5rem" ml="1.5rem" fontSize="1.25rem" as="h2">Listagem de {active}</Text>
            {response()}
        </Box>

        
        <Grid mx="auto" bg="#FFFFFF" borderRadius="8px" w={["348px", "500px", "700px", "0", "0"]} display={["grid", "grid", "none", "none"]}>
            <Grid w="100%">
                <Grid px="1rem" py="2.5rem">
                    <Select onChange={(e) => setActive(e.target.value)} value={active} py="1rem" w="19.75rem">
                        <option value="colaboradores">Colaboradores</option>
                        <option value="cargos">Cargos</option>
                    </Select>
                    <InputGroup >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Search2Icon color='gray.400' />}
                        />
                        <Input py="1rem" w="19.75rem" type='text' placeholder="Pesquise por nome ou CPF"/>
                    </InputGroup>
                </Grid>
                <Divider w="100%"/>
                <Grid gap="1.5rem" px="1rem" py="2.5rem">
                    <Text as="h1">Listagem de {active}</Text>
                    {response()}
                </Grid>
            </Grid>
               
        </Grid>
        </Box>
    )
}

export default Card