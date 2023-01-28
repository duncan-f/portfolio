import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      mt={15}
      align="center"
      opacity={0.4}
      fontSize="sm"
      flexShrink={0}
    >
      &copy; {new Date().getFullYear()} Farouk Mokhtari. All Rights Reserved.
    </Box>
  )
}

export default Footer

