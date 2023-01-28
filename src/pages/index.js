import {
  Container,
  Box,
  Heading,
  Image
} from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragraph';

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
          <p>I&apos;m a Geophysics Engineer and a self-taught web developer passionate about Cyber Security, Ethical Hacking and CTFs.</p>
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
            width="100"
            height="100"
            display="inline-block"
            borderRadius="full"
            src="/images/duncan.png"
            alt="Profie picture"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">Work</Heading>
        <Paragraph>Paragraph here</Paragraph>
      </Section>
    </Container>
  );
};

export default Home;
