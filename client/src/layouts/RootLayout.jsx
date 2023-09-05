import {
  Link as ReactRouterLink,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
import { Link as ChakraLink, Container, HStack } from '@chakra-ui/react';

export function RootLayout() {
  return (
    <>
      <nav>
        <HStack justifyContent='space-between' padding={5}>
          <p>My App</p>
          <HStack spacing={5}>
            <ChakraLink as={ReactRouterLink} to='/posts'>
              Posts
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/users'>
              Users
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/todos'>
              Todos
            </ChakraLink>
          </HStack>
        </HStack>
      </nav>
      <ScrollRestoration />
      <Container maxW='64rem'>
        <Outlet />
      </Container>
    </>
  );
}
