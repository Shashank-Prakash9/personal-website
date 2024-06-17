"use client"; // Ensure this is marked as a client component

import { Box, Heading, Text, VStack, HStack, Tag } from '@chakra-ui/react';

const experiences = [
  {
    title: 'Sentiment Analysis Service in Go',
    date: 'May 2023 - Aug 2023',
    details: [
      'Developed a sentiment analysis service using Go, leveraging AWS Lambda for serverless computation and Amazon Comprehend for natural language processing.',
      'Used DynamoDB to store text inputs and sentiment results, with API Gateway to expose the service as HTTP endpoints.',
      'Implemented CloudWatch for logging and monitoring to ensure efficient performance tracking and debugging.',
    ],
    tags: ['Go', 'AWS', 'Lambda', 'DynamoDB', 'API Gateway', 'CloudWatch'],
  },
  {
    title: 'Mesh2Splat: Deep Learning method to convert Meshes to Gaussian Splats',
    date: 'Aug 2023 - Jan 2024',
    details: [
      'Converting 3D shape representations like meshes and point clouds into graphics-ready Gaussian splats which can enable efficient rendering and differentiable computations.',
      'Designed Mesh2Splat, an end-to-end framework for consolidating meshes or point clouds into Gaussian splat predictions suitable for real-time rendering.',
      'Developed Objaverse-Splats, the first dataset of graphics shapes paired with high-quality Gaussian splat representations.',
    ],
    tags: ['Deep Learning', '3D Rendering', 'Gaussian Splats'],
  },
  {
    title: 'Marker-Less Pose Estimation and Localization of Robots with Camera Feed',
    date: 'Jan 2023 - Jul 2023',
    details: [
      'Generated a high fidelity synthetic image dataset of the robot from its CAD model with ISAAC Sim and UNITY 3D, at Indian Institute of Science.',
      'Replaced real-world data and trained a YOLO based keypoint detection model thereafter used for markerless pose estimation and localization of the bot in an indoor environment.',
      'Integrated the model along with the custom built navigation and path correction stack into the Robotic Operating System.',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'Robotics', 'YOLO', 'ROS'],
  },
  {
    title: 'Cloud Based Application for Early Detection of Oral Cancer',
    date: 'Jan 2023 - Jun 2023',
    details: [
      'Designed a Deep Learning Application for Early Detection of Oral Squamous Cell Carcinoma, at Ramaiah University of Applied Science, from Whole Slide Images deployed on Amazon Cloud to aid pathologists.',
      'Utilized a YOLOv8 based model to detect structural and cytological features which serve as an indicator to the severity of the cancerous growth.',
    ],
    tags: ['Deep Learning', 'Medical Imaging', 'AWS', 'YOLOv8'],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Hewlett Packard Enterprise, Chennai, India',
    date: 'Sep 2021 - Aug 2022',
    details: [
      'Led a 5 person team to design and deploy a React, Flask and PostgreSQL based webapp to provide data center security using Deep Learning to identify tailgating, server rack position and track the status of critical servers.',
      'Reduced the intrusion detection turn around time from an 8 hour time period to 22 minutes.',
      'Localized employee location in video frame allowing to monitor employee actions in server rooms.',
    ],
    tags: ['Machine Learning', 'Web Development', 'React', 'Flask', 'PostgreSQL'],
  },
  {
    title: 'Research Intern',
    company: 'Hindustan Aeronautical Limited, Bangalore, India',
    date: 'Sep 2021 - Oct 2021',
    details: [
      'Implemented a C++ based tool to analyze and consolidate SAR images for post flight analysis.',
      'Developed a tool that takes in small patches of radar data, stitches and generates large reconnaissance maps.',
      'Validated the tool with on-site testing utilizing data obtained from a SAR mounted on an IAF plane reducing the analysis time to 30 minutes.',
    ],
    tags: ['C++', 'SAR', 'Image Analysis'],
  },
];

const Experience = () => (
  <Box
    id="experience"
    p={5}
    maxW="1200px"
    mx="auto"
    my={5}
    boxShadow="md"
    borderRadius="md"
  >
    <Heading as="h2" size="xl" mb={4} color="white" textAlign="center">Experience</Heading>
    {experiences.map((exp, index) => (
      <Box
        key={index}
        p={5}
        borderRadius="md"
        boxShadow="lg"
        mb={8}
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Heading as="h3" size="lg" mb={2} color="teal.300">{exp.title}</Heading>
        <Text color="gray.400" mb={1}>{exp.company} | {exp.date}</Text>
        <VStack align="start" spacing={1} mb={3}>
          {exp.details.map((detail, i) => (
            <Text key={i} color="gray.200">• {detail}</Text>
          ))}
        </VStack>
        <HStack spacing={2}>
          {exp.tags.map((tag, i) => (
            <Tag key={i} colorScheme="teal">{tag}</Tag>
          ))}
        </HStack>
      </Box>
    ))}
  </Box>
);

export default Experience;
