import { useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/AuthReducer/action';
import { getUser } from '../Redux/AppReducer/action';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}>
    {children}
  </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAuth = useSelector(state => state.AuthReducer.isAuth);
    const dispatch = useDispatch();
    const username = useSelector(state => state.AuthReducer.username);
    const token = useSelector(state => state.AuthReducer.token);
    const user = useSelector(state => state.AppReducer.user);

    const userDetails = () => {
      dispatch(getUser(username, token));
    }

    // const logoutHandler = () => {
    //     dispatch(logout());
    // }

    useEffect(() => {
      if(isAuth){
        userDetails();
      }
  },[])

    return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <NavLink>
                  <RouterLink to='/'>
                      <Heading as='h6' size='xs'>
                          Home
                      </Heading>
                  </RouterLink>
                </NavLink>
                    
            </HStack>
          </HStack>
          {isAuth ? (
            <MenuList>
              <MenuItem><NavLink>
                <Button
                  as={'a'}
                  fontSize={'sm'}
                  fontWeight={400}>
                  Logout
                </Button>
              </NavLink></MenuItem>
            </MenuList>
          ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}>
                  <RouterLink to='/login'>
                    Sign In
                  </RouterLink>
              </Button>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                _hover={{
                  bg: 'pink.300',
                }}>
                  <RouterLink to='/signup'>
                    Sign Up
                  </RouterLink>
              </Button>
            </Stack>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink>
                <RouterLink to='/'>
                    <Heading as='h6' size='xs'>
                        Home
                    </Heading>
                </RouterLink>
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}