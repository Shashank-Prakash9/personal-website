"use client"; // Ensure this is marked as a client component

import { Box, Link, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  // { id: 'projects', label: 'Projects' },
  // { id: 'certification', label: 'Certification' },
  { id: 'skills', label: 'Skills' },
  // { id: 'hobbies', label: 'Hobbies' },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    let currentSection = 'home';
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      }
    });
    setActiveSection(currentSection);
    setIsVisible(window.scrollY > window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      left={0}
      top="50%"
      transform="translateY(-50%)"
      w="200px"
      color="white"
      p={5}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s"
      pointerEvents={isVisible ? 'auto' : 'none'}
      bg="transparent"
    >
      <VStack align="start" spacing={5}>
        {sections.map(section => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            _hover={{ textDecoration: 'none', color: 'teal.300' }}
            color={activeSection === section.id ? 'teal.300' : 'gray.300'}
          >
            {section.label}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
