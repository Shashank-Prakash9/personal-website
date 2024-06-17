import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';

const Publications = () => (
  <Box id="publications" p={5} maxW="800px" mx="auto" my={5} bg="white" boxShadow="md">
    <Heading as="h2" size="xl" mb={4}>Publications</Heading>
    <List spacing={3}>
      <ListItem>
        <Text><strong>Quantum Computing - The Next Big Leap in the World of Computation:</strong> Published at The International Conference on Electronics, Computing and Communication Technologies, 2023.</Text>
      </ListItem>
    </List>
  </Box>
);

export default Publications;
