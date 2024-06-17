"use client"; // Ensure this is marked as a client component

import { Box, Heading, Text, SimpleGrid, VStack, HStack, Tag } from '@chakra-ui/react';

const skills = {
  'Machine/Deep Learning': ['Tensorflow', 'PyTorch', 'NLP', 'TorchVision', 'Onnx'],
  'Languages': ['Python', 'C++', 'Java', 'C', 'Go'],
  'Data Science': ['SciKit Learn', 'Numpy', 'Pandas', 'XGBoost', 'BeautifulSoup'],
  'Databases': ['SQL', 'PostgreSQL', 'Neo4J'],
  'AWS': ['EC2', 'S3', 'DynamoDB', 'Lambda'],
  'Web Development': ['Golang', 'React', 'Flask', 'HTML', 'CSS'],
  '3D Rendering': ['Unity 3D', 'ISAAC SIM'],
};

const Skills = () => (
  <Box
    id="skills"
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
    <Heading as="h2" size="xl" mb={4} color="white">Skills</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {Object.keys(skills).map((category, index) => (
        <VStack key={index} align="start">
          <Heading as="h3" size="lg" mb={2} color="teal.300">{category}</Heading>
          <HStack spacing={2}>
            {skills[category].map((skill, i) => (
              <Tag key={i} colorScheme="teal">{skill}</Tag>
            ))}
          </HStack>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default Skills;
