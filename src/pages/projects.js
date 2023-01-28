import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";

import blog from '../../public/images/projects/blog.png'

const Projects = () => {
  return (
    <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>Projects</Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem id="blog" title="Blog" thumbnail={blog}>
            This is my blog, it is powered by Hugo
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

    {/*
      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>Projects</Heading>
      </Section>
      */}
    </Container>
    </Layout>
  )
}

export default Projects
