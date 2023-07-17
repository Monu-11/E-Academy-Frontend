import React, { useState } from 'react';
import {
  Avatar,
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
import { register } from '../../redux/actions/user';

export const fileUploadCss = {
  cursor: 'grab',
  marginTop: '-5px',
  width: '100%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
  // opacity: 0,
  // position: 'absolute',
  // zIndex: -1,
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const submitHandler = e => {
    e.preventDefault();
    const form = {
      name: name,
      email: email,
      password: password,
      file: image,
    };
    dispatch(register(form));
  };
  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'8'}>
        <Heading textTransform={'uppercase'} children={'Registration'} />

        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box marginY={'2'} display={'flex'} justifyContent={'center'}>
            <Avatar size={'xl'} src={imagePrev} />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="example"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
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
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your Password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'} style={{ width: '100%' }}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/**"
              required
              id="chooseAvatar"
              onChange={changeImageHandler}
              type="file"
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            style={{ marginTop: '10px', width: '100%' }}
          >
            <Button width={'40%'} my={'2'} colorScheme="yellow" type="submit">
              Sign Up
            </Button>
          </Box>
          <Box style={{ marginTop: '10px', marginBottom: '10px' }}>
            Already Signed Up ?{' '}
            <Link to="/login">
              <Button colorScheme="yellow" variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Registration;
