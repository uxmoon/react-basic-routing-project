import {
  Link as ReactRouterLink,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from 'react-router-dom';
import {
  Center,
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
        <HStack
          justifyContent='space-between'
          padding={5}
          bgColor='teal'
          color='white'
        >
          <p>
            <ChakraLink as={ReactRouterLink} to='/posts'>
              My App
            </ChakraLink>
          </p>
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
        <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='teal'
            size='xl'
          />
        </Center>
      )}
      <Container maxW='64rem' paddingTop={8}>
        <Outlet />
      </Container>
    </>
  );
}
