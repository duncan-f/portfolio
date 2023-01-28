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
        display={{md: 'flex'}}
        p={3}
        mb={6}
        mt={16}
        textAlign="center"
      >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Farouk Mokhtari</Heading>
          <p>I&apos;m a Geopgysics Engineer and a self-taught web developer passionate about Cyber Security, Ethical Hacking and CTFs.</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
