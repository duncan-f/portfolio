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
  IoLogoBitcoin,
  IoLogoLinkedin,
  IoMailOutline
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
          <p>Engineer, Web Developer, Bug Bounty Hunter (Trying to)</p>
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
        <Paragraph>I&apos;m a Geophysics Engineer and a self-taught web developer passionate about Cyber Security, Ethical Hacking and CTFs.</Paragraph>

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
          <BioYear>2020</BioYear>
          Implementing and Administring Cisco Solutions [without Certification].
        </Bio>

        <Bio>
          <BioYear>2017</BioYear>
          Certificate of Completion, CISSP, {' '}
          <Link href="https://www.mile2.com/" target="_blank">Mile2</Link>.
        </Bio>

        <Bio>
          <BioYear>2012</BioYear>
          State Engineer degree in Geophysics, Algeria, {' '}
          <Link href="https://www.usthb.dz/" target="_blank">USTHB</Link>.
        </Bio>

        <Bio>
          <BioYear>2003</BioYear>
          High School diploma: Buildings and Public Works, Algeria.
        </Bio>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Professional Experience</Heading>
        <Bio>
          <BioYear>2017</BioYear>
          National Agency of Valorisation of Hydrocarbones Ressources, Algeria, {' '}
          <Link href="https://www.alnaft.dz/" target="_blank">ALNAFT</Link>.
        </Bio>

        <Bio>
          <BioYear>2015</BioYear>
          Office of the Geological and Mining Research (ORGM), Algeria.
        </Bio>

        <Bio>
          <BioYear>2012</BioYear>
          Final Practical Training (Internship), Algeria, {' '}
          <Link href="https://www.sonatrach.dz/" target="_blank">Sonatrach</Link>.
        </Bio>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Technologies</Heading>
        <Paragraph>
          Python, PHP, MySQL, Javascript, Laravel, Django
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">Languages</Heading>
        <Paragraph>
          English, French, Arabic, Russian
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">On the web</Heading>
        <List mb={5}>
          <ListItem>
            <Link href="mailto:fmokhtari@mail.ru">
              <Button
                mb={2}
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoMailOutline} />}
              >fmokhtari@mail.ru</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/duncan-f" target="_blank">
              <Button
                mb={2}
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoGithub} />}
              >duncan-f</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/farouk-mokhtari-560133188" target="_blank">
              <Button
                mb={2}
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >Farouk Mokhtari</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/duncan12back" target="_blank">
              <Button
                mb={2}
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >@duncan12back</Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem href="https://youtube.com/dunCan" title="Title 1">
            Grid1
          </GridItem>
          <GridItem href="https://youtube.com/dunCan" title="Title 2">
            Grid2
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
    </Layout>
  );
};

export default Home;
