import {
  Container,
  Heading,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";

import blog from '../../public/images/projects/blog.png'
import portfolio from '../../public/images/projects/portfolio.png'
import geoservices from '../../public/images/projects/geoservices.png'

const Projects = () => {
  return (
    <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>Projects</Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="portfolio"
            title="My Portfolio"
            thumbnail={portfolio}
          >
            This is the current website. Since I&apos;m learing ReactJS Stack,
            I just wanted to try and code a portfolio using React and NextJS,
            combined with Chakra UI.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="blog" title="My Blog" thumbnail={blog}>
            This is my blog, it is powered by Hugo. It&apos;s where I share
            my knowledge in technology.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="geoservices"
            title="S.B. Géoservices Inc."
            thumbnail={geoservices}
          >
            This is a website I created for a company that operates in
            geoscience.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Projects
