import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

const Works = () => {
  return (
    <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>Works</Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.3}>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {/*
          <WorkGridItem id="work1" title="work1" thumbnail={thumb1}>
            This is the 1st work.
          </WorkGridItem>
      */}
        </Section>
      </SimpleGrid>

    {/*
      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>Works</Heading>
      </Section>
      */}
    </Container>
    </Layout>
  )
}

export default Works
