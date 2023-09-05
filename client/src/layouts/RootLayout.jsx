import {
  Link as ReactRouterLink,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
import { Link as ChakraLink, HStack } from '@chakra-ui/react';

export function RootLayout() {
  return (
    <>
      <nav className='top-nav'>
        <HStack justifyContent='space-between'>
          <div className='nav-text-large'>My App</div>
          <ul className='nav-list'>
            <li>
              <ChakraLink as={ReactRouterLink} to='/posts'>
                Posts
              </ChakraLink>
            </li>
            <li>
              <ChakraLink as={ReactRouterLink} to='/users'>
                Users
              </ChakraLink>
            </li>
            <li>
              <ChakraLink as={ReactRouterLink} to='/todos'>
                Todos
              </ChakraLink>
            </li>
          </ul>
        </HStack>
      </nav>
      <ScrollRestoration />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}
