import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Heading, LinkOverlay, LinkBox } from '@chakra-ui/react'
import { Global } from '@emotion/react'


export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} isExternal>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay as="div" href={`/projects/${id}`}>
          <Heading
            as="h4"
            variant="page-title"
            my={2}
            fontSize={20}
          >
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
  />
)
