import Head from 'next/head';
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal Homepage" />
        <meta name="author" content="Farouk Mokhtari" />
        <meta name="author" content="dunCan" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Personal Website</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
