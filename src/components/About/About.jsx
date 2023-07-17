import {
  Avatar,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import photo from '../../assets/images/instagram.jpg';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/Chillika.mp4';
import { RiSecurePaymentLine } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar src={photo} boxSize={['40', '48']} />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>
      <Stack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Mod Narayan Singh" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={`Hi, I am full-stack developer and a Mentor.
          Our mission is to provide quality content at reasonable price.`}
        />
      </Stack>
    </Stack>
  );
};

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days"
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container
      maxW={'container.lg'}
      padding={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <Heading children="About Us" textAlign={['center', 'left']} />

      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentLine />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
