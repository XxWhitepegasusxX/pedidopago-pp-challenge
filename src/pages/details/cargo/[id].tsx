/* eslint-disable react/jsx-key */
//CHAKRA IMPORTS
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Divider, Flex, Grid, Input, Link, Show, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

//API
import axios from "axios";
import api from "../../../services/api";

//NEXT IMPORTS
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

type TParams = {
  params:{
      id:string
  }
}

type TRoles = {
  name: string,
  departament: string,
  agents_quantity: number
}

export const getStaticProps: GetStaticProps = async ({
  params
} : TParams) => {
  
  try {
      const resp = await api(`/role/${params.id}`)

      return {
          props: {
            role:resp.data.role,
          },
        }

  } catch (e) {
      console.log(e)
      return {
          props: {
            role:{},
          },
          notFound:true
        }
  }
}

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [
      { params: 
          {
              id:'1' 
          } 
      }
    ],
    fallback:true
  };
}

type ObjRules = {
permissions: Array<string>
role:string
}

type TGroupRules = {
  department:string
  grouprules:Array<ObjRules>
}

type TRole = {
  role:TRoles & TGroupRules
}
  
const Cargos = ({
  role
  } : TRole) => {
    const { isFallback } = useRouter()

    if(isFallback){
        return <div>Carregando...</div>
    }
    

    return(
        <>

        <Show breakpoint="(min-width: 770px)">
        <Box mt="4rem" w="980px" mx="auto">
        <Box>
            <Text mb="1rem" as="h1" fontSize="2rem"><Link cursor="pointer" href={"/"}><ArrowBackIcon/></Link>Cargo e Permissões</Text>
          <Grid gap="2.5rem" py="2.5rem" px="1.5rem" bg="#FFFFFF">
            <Flex><Text fontWeight="bold" color="#34423D" as="h2">Dados do Cargo</Text></Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
              <Text as="p">Departamento</Text>
              <Input w="27.5rem" type="text" placeholder="SAC"/>
              </Box>
              <Box>
                <Text as="p">Cargo</Text>
              <Input w="27.5rem" type="text" placeholder="Analista"/>
              </Box>
            </Flex>
            <Flex><Text fontWeight="bold" color="#34423D" as="h2">Listagem de permissões</Text></Flex>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th w="50%">Cargo</Th>
                    <Th>Ler</Th>
                    <Th>Editar</Th>
                    <Th>Exluir</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {role.grouprules.map(roles => (
                    <Tr>
                      <Td>Analista</Td>
                      <Td>{roles.permissions.includes("read") ? <Checkbox isReadOnly colorScheme='green' defaultChecked></Checkbox> : <Checkbox isReadOnly colorScheme='green' ></Checkbox>}</Td>
                      <Td>{roles.permissions.includes("write") ? <Checkbox isReadOnly colorScheme='green' defaultChecked></Checkbox> : <Checkbox isReadOnly colorScheme='green' ></Checkbox>}</Td>
                      <Td>{roles.permissions.includes("delete") ? <Checkbox isReadOnly colorScheme='green' defaultChecked></Checkbox> : <Checkbox isReadOnly colorScheme='green' ></Checkbox>}</Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

          </Grid>
        </Box>

        </Box>
        </Show>
        
        <Show breakpoint="(max-width: 769px)">
          <Grid justifyContent={'center'} mt="6rem">
            <Text mb="1rem" as="h1" fontSize="2rem"><Link cursor="pointer" href={"/"}><ArrowBackIcon/></Link>Cargo e Permissões</Text>
          </Grid>
          <Grid gap="2.5rem" py="2.5rem" px="1.5rem" bg="#FFFFFF">
            <Text fontWeight="bold" color="#34423D" as="h2">Dados do Cargo</Text>
            <Grid gridTemplateColumns={'1fr'}>
              <Box>
              <Text as="p">Departamento</Text>
              <Input p="1rem" type="text" placeholder="SAC"/>
              </Box>
              <Box>
                <Text as="p">Cargo</Text>
              <Input type="text" placeholder="Analista"/>
              </Box>
            </Grid>
            <Divider/>
            <Text fontWeight="bold" color="#34423D" as="h2">Listagem de permissões</Text>
            <TableContainer>
              <Table fontSize='xx-small' size={'sm'}>
                <Thead>
                  <Tr>
                    <Th fontSize={'xx-small'}>Cargo</Th>
                    <Th fontSize={'xx-small'}>Ler</Th>
                    <Th fontSize={'xx-small'}>Editar</Th>
                    <Th fontSize={'xx-small'}>Comentar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {role.grouprules.map(rules => (
                    <Tr>
                      <Td fontSize={'x-small'}>{rules.role}</Td>
                      <Td fontSize={'xx-small'}>{rules.permissions.includes("read") ? <Checkbox isReadOnly colorScheme='green' defaultChecked></Checkbox> : <Checkbox isReadOnly colorScheme='green' ></Checkbox>}</Td>
                      <Td fontSize={'xx-small'}>{rules.permissions.includes("write") ? <Checkbox isReadOnly colorScheme='green' defaultChecked></Checkbox> : <Checkbox isReadOnly colorScheme='green' ></Checkbox>}</Td>
                      <Td fontSize={'xx-small'}>{rules.permissions.includes("delete") ? <Checkbox isReadOnly colorScheme='green' defaultChecked></Checkbox> : <Checkbox isReadOnly colorScheme='green' ></Checkbox>}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Grid>


        </Show>
        </>
    )
}
export default Cargos;