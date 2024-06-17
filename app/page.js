import { Box, Flex } from '@chakra-ui/react';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
// import Certification from './components/Certification';
import Skills from './components/Skills';
// import Contact from './components/Contact';

export default function Home() {
  return (
    <Flex direction="column" bg="gray.900" color="white">
      <Sidebar />
      <Box ml={{ base: "0", md: "200px" }} w={{ base: "100%", md: "calc(100% - 200px)" }}>
        <Hero id="home" />
        <main style={{ padding: '20px' }}>
          <About id="about" />
          <Experience id="experience" />
          <Education id="education" />


          <Skills id="skills" />

        </main>
      </Box>
    </Flex>
  );
}
