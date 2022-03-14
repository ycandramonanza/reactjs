import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Menu,
    MenuButton,
  } from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Link } from "react-router-dom";
//   import { Logo } from './Logo'
  
  function AppBarHeaderv1 () {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="nav" bg='tomato' maxWidth='1370px' w='1350px'>
            <Container py={{ base: '3', lg: '4' }} maxWidth="100%" w="100%">
                <Flex justify="space-around">
                <HStack spacing="4">
                    {/* <Text>put your logo</Text> */}
                    <Menu>
                        <Link to="/">
                            <MenuButton as={Button} colorScheme='pink'>
                                Home
                            </MenuButton>
                        </Link>
                        <Link to="/about">
                            <MenuButton as={Button} colorScheme='pink'>
                                About
                            </MenuButton>
                        </Link>
                        
                    </Menu>
                </HStack>

                {isDesktop ? (
                    <HStack spacing="4">
                        <ButtonGroup variant="ghost-on-accent" spacing="1">
                            <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                            <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                            <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
                        </ButtonGroup>
                        <Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
                    </HStack>
                ) : (
                    <IconButton
                    variant="ghost-on-accent"
                    // icon={<Te>FiMenu</Te>}
                    aria-label="Open Menu"
                    />
                )}
                </Flex>
            </Container>
        </Box>
    )
  }

  export default AppBarHeaderv1;