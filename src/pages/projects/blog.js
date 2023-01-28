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
  <Layout title="Blog">
    <Container>
      <Title>
        Blog <Badge>2022-</Badge>
      </Title>
      <P>
        This is my blog, and it is a project that I&apos;ve tried with {' '}
        <Link href="https://gohugo.io/" target="_blank">Hugo</Link>.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://duncan-f.github.io/" target="_blank">
            https://duncan-f.github.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/blog.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Project

