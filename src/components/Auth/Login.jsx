import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for showing password

  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to Apex Academy'} />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'} style={{ width: '100%' }}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              type={showPassword ? 'text' : 'password'}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your Password"
              focusBorderColor="yellow.500"
            />
            <Button
              pos="absolute"
              width={'3.5rem'}
              marginLeft={'-57px'}
              onClick={toggleShowPassword}
              variant="ghost"
              colorScheme="yellow"
              _active={{ outline: 'none' }}
              zIndex={'1'}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={'md'} />
              ) : (
                <AiFillEye size={'md'} />
              )}
            </Button>
          </Box>

          <Box
            display={'flex'}
            flexDirection={'column'}
            style={{ marginTop: '10px', width: '100%' }}
          >
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password
              </Button>
            </Link>
            <Button width={'40%'} my={'4'} colorScheme="yellow" type="submit">
              Login
            </Button>
          </Box>
          <Box style={{ marginTop: '10px' }}>
            New User ?{' '}
            <Link to="/register">
              <Button colorScheme="yellow" variant={'link'}>
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
