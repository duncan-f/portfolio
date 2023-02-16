import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="S.B. Géoservices Inc.">
    <Container>
      <Title>
        S.B. Géoservices Inc. <Badge>2023</Badge>
      </Title>
      <P>
        This website was created with{' '}
        <Link href="https://astro.build" isExternal>
          Astro
          <ExternalLinkIcon mx="2px" />
        </Link>, combined with ReactJS.
        I stumbled upon this technology on YouTube and I wanted to try it out
        and make something with it.
        It's an easy and fast Framework for static websites.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sboulila.netlify.app/" isExternal>
            https://sboulila.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro, ReactJS, Javascript</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/geoservices.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Project


