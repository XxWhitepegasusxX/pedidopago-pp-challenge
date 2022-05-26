/* eslint-disable react/jsx-key */
//CHAKRA UI IMPORTS
import { ChevronDownIcon, CopyIcon, DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Show, Avatar, Box, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Accordion, AccordionItem, AccordionButton, Grid, Flex, AccordionIcon, AccordionPanel, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
//API
import api from "../../services/api"

//NEXT IMPORTS
import Link from "next/link";
import { useEffect, useState } from "react"

interface AxiosProps {
    roles: {
        name: string;
        departament: string;
        agents_quantity: 5   
    }[]
}

export default function Cargos(){
    const [state, setState] = useState<AxiosProps>({
        roles: []
      })
      
      useEffect(() => {
        api.get('roles')
          .then(res => setState(res.data))
      },[])
    
      const { roles } = state
      console.log("roles 👾:")
      console.log(roles)
      
      const { isOpen, onOpen, onClose } = useDisclosure()
      
        return(
          <>

            <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Ações</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid width={'100%'} justifyContent="left" alignItems="center" gap="1rem">
                            <Link href={`/details/cargo/1`}><Text pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><ViewIcon/>Ver Cargo</Text></Link>
                            <Text pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><EditIcon/>Editar</Text>
                            <Text pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><CopyIcon/>Duplicar</Text>
                            <Text pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><DeleteIcon/>Excluir</Text>
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>

          <Show breakpoint="(min-width: 770px)">
          <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Cargo</Th>
                        <Th>Departamento</Th>
                        <Th>Colaboradores</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {roles.map(role => (
                        <Tr>
                            <Td>{role.name}</Td>
                            <Td>{role.departament}</Td>
                            <Td>{role.agents_quantity}</Td>
                            <Menu>
                                <MenuButton>
                                    <ChevronDownIcon/>
                                </MenuButton>
                                <MenuList>
                                    <Link key={role.name} href={`/details/cargo/1`}><MenuItem pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><ViewIcon/>Ver Cargo</MenuItem></Link>
                                    <MenuItem pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><EditIcon/>Editar</MenuItem>
                                    <MenuItem pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><CopyIcon/>Duplicar</MenuItem>
                                    <MenuItem pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><DeleteIcon/>Excluir</MenuItem>
                                </MenuList>
                            </Menu>
                        </Tr>
                    ))}

                </Tbody>
            </Table>
        </TableContainer>
        </Show>

        <Show breakpoint="(max-width: 769px)">
        <Accordion allowToggle>
                {roles.map(role => (
                    <AccordionItem>
                    <AccordionButton borderRadius="8px" pb="1rem" pt="1.5rem" px="1rem">
                        <Box flex="1" textAlign="left">
                            <Grid>
                                <Text>Cargo</Text>
                                <Text>{role.name}</Text>
                            </Grid>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        <Grid gap="3.125rem" gridTemplateColumns={["1fr 1fr"]}>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Cargo</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{role.name}</Text>
                            </Grid>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Departamento</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{role.departament}</Text>
                            </Grid>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Colaboradores</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{role.agents_quantity}</Text>
                            </Grid>
                        </Grid>
                        <Flex mt="1rem" width="100%" justifyContent="center" alignItems="center">
                            <Button onClick={onOpen} mx="auto" py="1rem" px="6.25rem" bg="#FFFFFF" border="1px solid #1DD195">Ações</Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
                ))}
            </Accordion>

        </Show>

        
          </>
)
}