//CHAKRA-UI
import { Show, Avatar, Box, Checkbox, Flex, Grid, Input, Link, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { ArrowBackIcon, CalendarIcon, InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";

//API
import api from "../../../services/api";

//NEXT IMPORTS
import { useEffect, useState } from "react";
import { useRouter } from "next/router";





interface ColaboradorProps {
    agent: {
  
      agent: {
        agent_id: string;
        birth_date: string;
        branch?: string;
        department: string;
        image: string;
        name: string;
        email: string;
        document: {
          number: number;
          type: string; 
        }
        phone: {
          ddd: string;
          ddi: string;
          number: string;
        }
        role: string;
        status: "active" | "inactive" | string;
      }
  
    }
}

const Colaborador: React.FC = () => {
    const [state, setState] = useState<ColaboradorProps>({
      agent: {
  
          agent: {
          agent_id: '',
          birth_date:  '',
          department: '',
          document: {
            number: 1,
            type: '',
          },
          email: '',
          phone: {
            ddd: '',
            ddi: '',
            number: '',
          },
          image: '',
          name: '',
          role: '',
          status: '',
          branch: '',
        }
  
      }
    });
    const { query } = useRouter();
    useEffect(() => {
  
      const getItems = async () => {
        try {
          await api.get(`agent/${query.id}`)
          .then(res => setState({
            agent: res.data
          }));
        } catch (err) {
          console.log(err)
        }
      }
  
      getItems();
    }, [query])
  
    console.log("☀ agent:")
    console.log(state);
  
    const { agent } = state;
    const birthday = new Date(agent.agent.birth_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'numeric',
        year: 'numeric',
      })
return(
    <>
    <Box display={['none', 'none', 'grid']} mt="4rem" w="980px" mx="auto">
    <Box>
        <Text mb="1rem" as="h1" fontSize="2rem"><Link cursor="pointer" href={"/"}><ArrowBackIcon/></Link>Detalhes do Colaborador</Text>
      <Grid gap="2.5rem" py="2.5rem" px="1.5rem" bg="#FFFFFF">
          <Flex alignItems="center" gap="1.5rem">
              <Avatar src={agent.agent.image} h="5rem" w="5rem"/>
              <Box>
                <Text fontWeight="600" fontSize="1.125rem" as="h1">{agent.agent.name}</Text>
                <Text as="h3">{agent.agent.email}</Text>
              </Box>
          </Flex>
          <Grid gap="1.5rem">
              <Text fontWeight="600" fontSize="1.125rem" as="h1">Informações pessoais</Text>
              <Flex gap="1.5rem">
                  <Flex gap="0.5rem" alignItems="center" h="4.375rem" w="18rem" borderRadius="8px" p="1rem" bg="#CAD6D1"><InfoOutlineIcon w="2rem" h="2rem"/>
                    <Box>
                        <Text color="#587169" fontSize="0.75rem" as="p">{agent.agent.document.type}</Text>
                        <Text fontSize="0.9rem" color="#587169">{agent.agent.document.number}</Text>
                    </Box>
                  </Flex>
                  <Flex gap="0.5rem" alignItems="center" h="4.375rem" w="18rem" borderRadius="8px" p="1rem" bg="#CAD6D1"><PhoneIcon w="2rem" h="2rem"/>
                    <Box>
                        <Text color="#587169" fontSize="0.75rem" as="p">Telefone</Text>
                        <Text fontSize="0.9rem" color="#587169">+{agent.agent.phone.ddi} {agent.agent.phone.ddd} {agent.agent.phone.number}</Text>
                    </Box>
                  </Flex>
                  <Flex gap="0.5rem" alignItems="center" h="4.375rem" w="18rem" borderRadius="8px" p="1rem" bg="#CAD6D1"><CalendarIcon w="2rem" h="2rem"/>
                    <Box>
                        <Text color="#587169" fontSize="0.75rem" as="p">Nascimento</Text>
                        <Text fontSize="0.9rem" color="#587169">{birthday}</Text>
                    </Box>
                  </Flex>                
              </Flex>
          </Grid>
          <Grid justifyContent="center" gap="1.5rem" borderRadius="8px" border="1px solid rgba(0, 0, 0, 0.2)" p="1.5rem">
            <Text fontWeight="600" fontSize="1.125rem" as="h1">Dados organizacionais</Text>
            <Grid gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} gap="1.5rem">
            <Box>
                <Text>Departamento</Text>
                <Select isReadOnly placeholder={agent.agent.department} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" w="26.125rem" bg="#CAD6D1"></Select>
            </Box>
            <Box>
                <Text>Cargo</Text>
                <Select isReadOnly placeholder={agent.agent.role} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" w="26.125rem" bg="#CAD6D1"></Select>
            </Box>
            <Box>
                <Text>Unidade</Text>
                <Select isReadOnly placeholder={agent.agent.branch} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" w="26.125rem" bg="#CAD6D1"></Select>
            </Box>
            <Box>
                <Text>Status</Text>
                <Select isReadOnly placeholder={agent.agent.status == 'active' ? "Ativo" : "Inativo"} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" w="26.125rem" bg="#CAD6D1"></Select>
            </Box>
            
            </Grid>

          </Grid>
      </Grid>
    </Box>
    </Box>

    <Show breakpoint='(max-width: 769px)'>
      <Grid justifyContent='center' mt={'7rem'}>
      <Text mb="1rem" fontSize={'2rem'} as="h1"><Link cursor="pointer" href={"/"}><ArrowBackIcon/></Link>Detalhes do Colaborador</Text>
        <Grid gap="2.625rem" py="3rem" px="1rem" w="100%" bg='#FFFFFF'>
          <Flex alignItems="center" gap="1rem">
            <Avatar w="80px" h="80px" src={agent.agent.image}/>
            <Grid>
              <Text fontWeight="600" fontSize="1.125rem" as="h1">{agent.agent.name}</Text>
              <Text as="h3">{agent.agent.email}</Text>
            </Grid>
          </Flex>
          <Grid gap="1.5rem">
            <Text color="#34423D" as="h2" fontWeight="600" fontSize="1.125rem">Informações Pessoais</Text>
            <Grid gap="0.5rem" justifyContent={'center'} gridTemplateColumns={'1fr'}>
              <Flex mx="auto" gap="0.5rem" alignItems="center" h="4.375rem" w="18rem" borderRadius="8px" p="1rem" border="1px solid rgba(0, 0, 0, 0.2)" bg="#F5FAF8"><InfoOutlineIcon w="2rem" h="2rem"/>
                <Box>
                  <Text color="#587169" fontSize="0.75rem" as="p">{agent.agent.document.type}</Text>
                  <Text fontSize="0.9rem" color="#587169">{agent.agent.document.number}</Text>
                </Box>
              </Flex>
              <Flex mx="auto" gap="0.5rem" alignItems="center" h="4.375rem" w="18rem" borderRadius="8px" p="1rem" border="1px solid rgba(0, 0, 0, 0.2)" bg="#F5FAF8"><PhoneIcon w="2rem" h="2rem"/>
                <Box>
                  <Text color="#587169" fontSize="0.75rem" as="p">Telefone</Text>
                  <Text fontSize="0.9rem" color="#587169">+{agent.agent.phone.ddi} {agent.agent.phone.ddd} {agent.agent.phone.number}</Text>
                </Box>
              </Flex>
              <Flex mx="auto" gap="0.5rem" alignItems="center" h="4.375rem" w="18rem" borderRadius="8px" p="1rem" border="1px solid rgba(0, 0, 0, 0.2)" bg="#F5FAF8"><CalendarIcon w="2rem" h="2rem"/>
                <Box>
                  <Text color="#587169" fontSize="0.75rem" as="p">Nascimento</Text>
                  <Text fontSize="0.9rem" color="#587169">{birthday}</Text>
                </Box>
              </Flex>
            </Grid>
          </Grid>
          <Grid gap="1.5rem" p="1.5rem">
            <Text color="#34423D" as="h2" fontWeight="600" fontSize="1.125rem">Dados organizacionais</Text>
            <Grid gridTemplateColumns={'1fr'} gap="1.5rem">
              <Box>
                  <Text>Departamento</Text>
                  <Select isReadOnly placeholder={agent.agent.department} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" bg="#CAD6D1"></Select>
              </Box>
              <Box>
                  <Text>Cargo</Text>
                  <Select isReadOnly placeholder={agent.agent.role} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" bg="#CAD6D1"></Select>
              </Box>
              <Box>
                  <Text>Unidade</Text>
                  <Select isReadOnly placeholder={agent.agent.branch} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" bg="#CAD6D1"></Select>
              </Box>
              <Box>
                  <Text>Status</Text>
                  <Select isReadOnly placeholder={agent.agent.status == 'active' ? "Ativo" : "Inativo"} gap="0.5rem" alignItems="center" h="3.5rem" borderRadius="8px" bg="#CAD6D1"></Select>
              </Box>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Show>
    </>
)
}

export default Colaborador