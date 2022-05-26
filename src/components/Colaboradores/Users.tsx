/* eslint-disable react/jsx-key */
//IMPORTS
import Link from "next/link";
import { useEffect, useState } from "react"

//CHAKRA UI
import { ChevronDownIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, Menu, MenuButton, MenuList, MenuItem, Accordion, AccordionItem, AccordionButton, Grid, Flex, AccordionIcon, AccordionPanel, Button, useDisclosure } from "@chakra-ui/react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react'

//API
import api from "../../services/api"


interface AxiosProps {
    items: {
        agent_id: string;
        branch?: string;
        department: string;
        image: string;
        name: string;
        role: string;
        status: "active" | "inactive" | string;
    }[]
}

export default function Users(){
    const [users, setUsers] = useState<AxiosProps>({
        items: []
    })
    useEffect(() => {
        api.get('agents')
          .then(res => setUsers(res.data))
      },[])
    const { items } = users;
    
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
                <Link href={`/details/colaborador/1`}><Text pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><ViewIcon/>Ver Colaborador</Text></Link>
                <Text cursor="not-allowed" pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><DeleteIcon/> Excluir</Text>
              </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Box display={["none", "none", "inline-block", "inline-block"]}>
            <TableContainer overflowX="hidden" mx="auto" width="100%">
                <Table>
                    <Thead border="1px solid rgba(0, 0, 0, 0.2)" borderRadius="full">
                        <Tr color="#587169">
                            <Th>Nome completo</Th>
                            <Th>Departamento</Th>
                            <Th>Cargo</Th>
                            <Th>Unidade</Th>
                            <Th>Status</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {items.map(item => (
                            <Tr>
                            <Td gap="0.5rem" display="flex" alignItems="center"><Avatar w="2rem" h="2rem" src={item.image}/>{item.name}</Td>
                            <Td>{item.department}</Td>
                            <Td>{item.role}</Td>
                            <Td>{item.branch}</Td>
                            <Td><Text variant={item.status == "active" ? "active" : "inactive"}><strong>{item.status == "active" ? "Ativo" : "Inativo"}</strong></Text></Td>
                            <Td>
                            <Menu>
                                <MenuButton>
                                    <ChevronDownIcon/>
                                </MenuButton>
                                <MenuList>
                                    <Link key={item.name} href={`/details/colaborador/1`}><MenuItem pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><ViewIcon/>Ver Colaborador</MenuItem></Link>
                                    <MenuItem cursor="not-allowed" pl="1rem" alignItems="center" justifyContent="left" display="flex" gap="1rem"><DeleteIcon/> Excluir</MenuItem>
                                </MenuList>
                            </Menu>
                            </Td>
                            </Tr>
                        ))}

                    </Tbody>

                </Table>
            </TableContainer>
        </Box>

        
        <Box display={["grid", "grid", "none", "none"]}>
            <Accordion allowToggle>
                {items.map(item => (
                    <AccordionItem>
                    <AccordionButton borderRadius="8px" pb="1rem" pt="1.5rem" px="1rem">
                        <Box flex="1" textAlign="left">
                            <Grid gap="0.5rem">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Nome Completo</Text>
                                <Flex gap="0.5rem" alignItems="center"><Avatar src={item.image}/><Text fontWeight="600" color="#587169" fontSize="0.75rem" as="p">{item.name}</Text></Flex>
                            </Grid>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        <Grid gap="3.125rem" gridTemplateColumns={["1fr 1fr"]}>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Departamento</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{item.department}</Text>
                            </Grid>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Cargo</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{item.role}</Text>
                            </Grid>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Unidade</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{item.agent_id}</Text>
                            </Grid>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Unidade</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2">{item.branch}</Text>
                            </Grid>
                            <Grid textAlign="left">
                                <Text fontWeight="600" color="#587169" fontSize="0.75rem" as="h2">Status</Text>
                                <Text fontWeight="400" color="#587169" fontSize="0.75rem" as="h2" variant={item.status == "active" ? "active" : "inactive"}><strong>{item.status == "active" ? "Ativo" : "Inativo"}</strong></Text>
                            </Grid>
                        </Grid>
                        <Flex mt="1rem" width="100%" justifyContent="center" alignItems="center">
                            <Button onClick={onOpen} mx="auto" py="1rem" px="6.25rem" bg="#FFFFFF" border="1px solid #1DD195">Ações</Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </Box>       
        </>
    )
}