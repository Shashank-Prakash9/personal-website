"use client"; // Ensure this is marked as a client component

import { Box, Button, Flex, Icon, Text, Link, VStack, HStack } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Profile = () => {
  return (
    <Box textAlign="center" p={5} maxW="800px" mx="auto" my={5} bg="gray.800" boxShadow="md" borderRadius="md" color="white">
      <VStack spacing={5}>
        <HStack spacing={4}>
          <Button colorScheme="teal" variant="outline">
            Open Resume
          </Button>
          <Button colorScheme="teal">
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
  );
};

export default Profile;
