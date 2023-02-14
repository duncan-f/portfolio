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
  <Layout title="Blog">
    <Container>
      <Title>
        Blog <Badge>2022</Badge>
      </Title>
      <P>
        This website is my blog, and it is a project that I&apos;ve tried and
        powered by {' '}
        <Link href="https://gohugo.io/" target="_blank">
          Hugo
          <ExternalLinkIcon />
        </Link>.
        With Hugo framework it&apos;s easy to implement a fully functional static website.
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
          <span>Hugo, HTML, CSS, Javascript</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/blog.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Project

