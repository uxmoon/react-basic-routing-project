import {
  Link as ReactRouterLink,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from 'react-router-dom';
import {
  Link as ChakraLink,
  Container,
  HStack,
  Spinner,
} from '@chakra-ui/react';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
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
      {isLoading && (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='teal'
          size='xl'
        />
      )}
      <Container maxW='64rem'>
        <Outlet />
      </Container>
    </>
  );
}
