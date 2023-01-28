import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Bio, BioYear } from '../components/bio';
import { GridItem } from '@chakra-ui/react';
import {
  IoLogoTwitter,
  IoLogoGithub,
} from 'react-icons/io5';

const Home = () => {
  return (
    <Layout title="Home">
    <Container>
      <Box
        display={{md: 'flex'}}
        p={3}
        mb={6}
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
          textAlign="center"
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
        <Heading as="h3" variant="section-title">About Me</Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Education</Heading>
        <Bio>
          <BioYear>2012</BioYear>
          Engineer in Geophysics, Algeria, {' '}
          <Link href="https://www.usthb.dz/" target="_blank">USTHB</Link>.
        </Bio>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">On the web</Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/duncan-f" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoGithub} />}
              >duncan-f</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://twitter.com/duncan12back" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >@duncan12back</Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem href="https://youtube.com/dunCan" title="dunCan">
            Grid1
          </GridItem>
          <GridItem href="https://youtube.com/dunCan" title="dunCan">
            Grid2
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
    </Layout>
  );
};

export default Home;
