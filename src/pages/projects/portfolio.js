import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Portfolio">
    <Container>
      <Title>
        Portfolio <Badge>2023</Badge>
      </Title>
      <P>
        This is the current website. Since I&apos;m learing ReactJS Stack,
        I just wanted to try and code a portfolio using React and NextJS.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mokhtari.netlify.app/" target="_blank">
            https://mokhtari.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, NextJS, Javascript</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/portfolio.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Project

