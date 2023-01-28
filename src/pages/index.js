import {
  Container,
  Box,
  Heading,
  Image
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
        <Box
          flexShrink={0}
          mt={{base: 4, md: 0}}
          ml={{md: 6}}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/duncan.jpg"
            alt="Profie picture"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
