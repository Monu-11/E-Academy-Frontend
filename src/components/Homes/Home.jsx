import React from 'react';
import './home.css';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { ImYoutube2 } from 'react-icons/im';
import { SiUdemy } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import introVideo from '../../assets/videos/Chillika.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading
              className="typed-out"
              children="LEARN FROM THE EXPERT"
              size={'2xl'}
            />
            <Text
              fontSize={['lg', '2xl']}
              fontFamily={'cursive'}
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/login">
              <Button className="btn" size={'lg'} colorScheme="yellow">
                Enroll Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800" overflowX={'hidden'}>
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />

        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <FcGoogle />
          <ImYoutube2 />
          <SiUdemy />
          <FaAws />
          <AiFillGithub />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
