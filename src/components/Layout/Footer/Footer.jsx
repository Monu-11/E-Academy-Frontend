// import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
// import React from 'react';
// import {
//   AiFillLinkedin,
//   AiFillYoutube,
//   AiFillGithub,
//   AiOutlineInstagram,
// } from 'react-icons/ai';

// const Footer = () => {
//   return (
//     <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
//       <Stack direction={['column', 'row']}>
//         <VStack alignItems={['center', 'flex-start']} width={'full'}>
//           <Heading children="All Right Reserved" color={'white'} />
//           <Heading
//             children={
//               <span>
//                 Copyright &copy;2023 Made with{' '}
//                 <span style={{ color: 'red' }}>&hearts;</span> by Singh
//               </span>
//             }
//             fontFamily={'body'}
//             size={'sm'}
//             color={'yellow.400'}
//           />
//         </VStack>

//         <HStack
//           spacing={['2', '10']}
//           justifyContent={'center'}
//           color={'white'}
//           fontSize={'50'}
//         >
//           <a
//             href="https://www.linkedin.com/in/mod-narayan-singh-4b98528a/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <AiFillLinkedin />
//           </a>
//           <a
//             href="https://www.instagram.com/modnarayansingh/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <AiOutlineInstagram />
//           </a>
//           <a
//             href="https://github.com/Monu-11/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <AiFillGithub />
//           </a>
//           <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
//             <AiFillYoutube />
//           </a>
//         </HStack>
//       </Stack>
//     </Box>
//   );
// };

// export default Footer;

import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            children={
              <span>
                Copyright &copy;2023 Made with{' '}
                <span style={{ color: 'red' }}>&hearts;</span> by Singh
              </span>
            }
            fontFamily={'body'}
            size={'sm'}
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          fontSize={'50'}
          color="white"
        >
          <a
            href="https://www.linkedin.com/in/mod-narayan-singh-4b98528a/"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              _hover={{ color: 'yellow.400' }}
              as={AiFillLinkedin}
              cursor="pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/modnarayansingh/"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              _hover={{ color: 'yellow.400' }}
              as={AiOutlineInstagram}
              cursor="pointer"
            />
          </a>
          <a
            href="https://github.com/Monu-11/"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              _hover={{ color: 'yellow.400' }}
              as={AiFillGithub}
              cursor="pointer"
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <Box
              _hover={{ color: 'yellow.400' }}
              as={AiFillYoutube}
              cursor="pointer"
            />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
