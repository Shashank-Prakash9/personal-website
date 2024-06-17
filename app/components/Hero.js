"use client"; // Ensure this is marked as a client component

import { Box, Button, Flex, Heading, Icon, Image, Link, Text, VStack, HStack } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Hero = () => {
  return (
    <Box bg="gray.900" color="white" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        p={5}
      >
        <Box flex="1" mb={{ base: 10, md: 0 }} display="flex" justifyContent="center">
          <Image
            height={{ base: "auto", md: "100vh" }}
            maxW={{ base: "100%", md: "500px" }} // Ensure the image fits well within the layout
            objectFit="cover"
            src="Profile.jpeg" // Replace with your image path
            alt="Shashank Prakash"
          />
        </Box>
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }} maxW="600px">
          <Heading as="h1" size="2xl" mb={4}>
            Shashank Prakash
          </Heading>
          <Heading as="h2" size="xl" mb={4} color="teal.300">
            AI Engineer | Data Scientist| Backend Developer | CV Researcher
          </Heading>
          <VStack spacing={5} alignItems={{ base: 'center', md: 'flex-start' }}>
            <HStack spacing={4}>
              <Button colorScheme="teal" variant="outline" as={Link} href="resume.pdf" target="_blank">
                Open Resume
              </Button>
              <Button colorScheme="teal" as={Link} href="#about">
                View Profile
              </Button>
            </HStack>
            <HStack spacing={4}>
              <Link href="mailto:sp88287@usc.edu" isExternal>
                <Icon as={EmailIcon} boxSize={6} />
              </Link>
              <Link href="tel:+12135748229" isExternal>
                <Icon as={PhoneIcon} boxSize={6} />
              </Link>
              <Link href="https://www.linkedin.com/in/shashank-prakash-b903691b3/" isExternal>
                <Icon as={FaLinkedin} boxSize={6} />
              </Link>
              <Link href="https://github.com/Shashank-Prakash9" isExternal>
                <Icon as={FaGithub} boxSize={6} />
              </Link>
              <Link href="https://scholar.google.com/citations?user=Ljxc8GoAAAAJ&hl=en" isExternal>
                <Icon as={FaGlobe} boxSize={6} />
              </Link>
            </HStack>
            <Flex alignItems="center">
              <Icon as={MdLocationOn} boxSize={6} />
              <Text ml={2}>Los Angeles, CA</Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
