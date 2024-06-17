"use client"; // Ensure this is marked as a client component

import { Box, Heading, Text, Image, SimpleGrid, VStack } from '@chakra-ui/react';

const Education = () => (
  <Box id="education" p={5} maxW="1200px" mx="auto" my={5} bg="gray.800" boxShadow="md" borderRadius="md">
    <Heading as="h2" size="xl" mb={8} color="white" textAlign="center">Education</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box
        p={5}
        borderRadius="md"
        textAlign="center"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Image
          src="usc-logo.png" // Replace with the actual path to the USC logo
          alt="USC Logo"
          mx="auto"
          mb={4}
          boxSize="100px"
        />
        <VStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="white">University of Southern California</Text>
          <Text fontSize="md" color="gray.400">Master of Science in Computer Science</Text>
          <Text fontSize="sm" color="gray.500">Aug 2023 - May 2025</Text>
          <Text fontSize="lg" fontWeight="bold" color="teal.300">4.0 GPA</Text>
        </VStack>
      </Box>
      <Box
        p={5}
        borderRadius="md"
        textAlign="center"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Image
          src="rit-logo.png" // Replace with the actual path to the RIT logo
          alt="RIT Logo"
          mx="auto"
          mb={4}
          height={100}
          width={100}
        
        />
        <VStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="white">Ramaiah Institute Of Technology</Text>
          <Text fontSize="md" color="gray.400">Bachelor of Engineering in Computer Science and Engineering</Text>
          <Text fontSize="sm" color="gray.500">Aug 2019 - Jun 2023</Text>
          <Text fontSize="lg" fontWeight="bold" color="teal.300">9.49/10 GPA</Text>
        </VStack>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Education;
