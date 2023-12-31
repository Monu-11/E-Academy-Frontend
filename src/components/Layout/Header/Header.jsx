import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiMenu5Fill } from 'react-icons/ri';
import { Button, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { RiDashboardFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

const LinkButton = ({ url = '/', title = 'Home', onClock }) => {
  return (
    <Link to={url} onClick={onClock}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        zIndex={'overlay'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay backdropFilter="auto" backdropBlur="1px" />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={'2px'}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          >
            APEX ACADEMY
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton onClock={onClose} url="/" title="Home" />
              <LinkButton
                onClock={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClock={onClose}
                url="/request"
                title="Request a Course"
              />
              <LinkButton onClock={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClock={onClose} url="/about" title="About" />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Link to="/">
                          <Button variant={'ghost'} onClick={logoutHandler}>
                            <BiLogOut />
                            Logout
                          </Button>
                        </Link>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme="purple" variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
