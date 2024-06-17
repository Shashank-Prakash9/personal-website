import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';

const Projects = () => (
  <Box id="projects" p={5} maxW="800px" mx="auto" my={5} bg="gray.800" boxShadow="md" borderRadius="md">
    <Heading as="h2" size="xl" mb={4}>Projects</Heading>
    <List spacing={3}>
      <ListItem>
        <Text><strong>Sentiment Analysis Service in Go:</strong> Developed a sentiment analysis service using Go and AWS.</Text>
      </ListItem>
      <ListItem>
        <Text><strong>Mesh2Splat:</strong> Designed a deep learning method to convert 3D shapes to gaussian splats.</Text>
      </ListItem>
      <ListItem>
        <Text><strong>Marker-Less Pose Estimation:</strong> Developed a model for pose estimation and localization of robots.</Text>
      </ListItem>
      <ListItem>
        <Text><strong>Early Detection of Oral Cancer:</strong> Created a deep learning application for detecting oral cancer.</Text>
      </ListItem>
    </List>
  </Box>
);

export default Projects;
