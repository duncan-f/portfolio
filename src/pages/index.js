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
import { GridItem } from '../components/grid-item';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from 'react-icons/io5';
import thumbYoutube from '../../public/images/youtube.png';

const Home = () => {
  return (
    <Layout>
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
        <Paragraph>
          I&apos;m a Geophysics Engineer and a self-taught web developer
          passionate about Cyber Security, Ethical Hacking and CTFs.
          You can find my {' '}
          <Link href="resume.en.pdf">resume here</Link>.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects">
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
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">Technologies</Heading>
        <Paragraph>
          Python, PHP, MySQL, Javascript, Laravel, Django
        </Paragraph>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">Languages</Heading>
        <Paragraph>
          English, French, Arabic, Russian
        </Paragraph>
      </Section>

      <Section delay={0.7}>
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
          <GridItem
            href="https://youtube.com/@dunCan213"
            title="dunCan"
            thumbnail={thumbYoutube}
          >
            My YouTube Channel
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
    </Layout>
  );
};

export default Home;
