import {
  Container,
  Box,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'


const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        p={3}
        mb={6}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        My name is Farouk Mokhtari and I am a self-taught web developer passionate about Cyber Security, Ethical Hacking and CTFs.
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Farouk Mokhtari</Heading>
          <p>Geophysics Engineer, Web Developer, Cyber Security Enthusiast</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
