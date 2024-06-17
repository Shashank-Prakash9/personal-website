"use client"; // Ensure this is marked as a client component

import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => (
  <Box
    id="about"
    p={5}
    maxW="1200px"
    mx="auto"
    my={5}
    bg="gray.800"
    boxShadow="md"
    borderRadius="md"
    textAlign="center"
    
    transition="transform 0.3s"
    _hover={{ transform: 'scale(1.05)' }}
  >
    <Heading as="h2" size="xl" mb={4} color="white">About Me</Heading>
    <Text color="gray.200">
      Currently pursuing a Master of Science in Computer Science with a specialization in Artificial Intelligence at the University of Southern California, maintaining a perfect GPA of 4.0. I have a robust background in Machine Learning, Deep Learning, and Software Development, with proficiency in technologies such as TensorFlow, PyTorch, Go, and AWS services. My professional experience includes developing a sentiment analysis service using Go and AWS, converting 3D shapes into graphics-ready Gaussian splats, and designing a deep learning application for early detection of oral cancer. Additionally, I have interned at Hewlett Packard Enterprise and Hindustan Aeronautical Limited, contributing to projects that enhanced data center security and post-flight analysis, respectively.
    </Text>
  </Box>
);

export default About;
