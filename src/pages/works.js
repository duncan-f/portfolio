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

import work1 from '../../public/images/works/work1.png'

const Works = () => {
  return (
    <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>Works</Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="work1" title="work1" thumbnail={work1}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </WorkGridItem>
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
