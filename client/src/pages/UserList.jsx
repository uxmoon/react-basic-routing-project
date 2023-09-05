import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
  ListItem,
  List,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { getUsers } from '../api/users';

function UserList() {
  const users = useLoaderData();
  return (
    <>
      <Heading>User List</Heading>
      <SimpleGrid columns={2} spacing={10}>
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>{user.name}</CardHeader>
            <CardBody>
              <List>
                <ListItem>{user.company.name}</ListItem>
                <ListItem>{user.website}</ListItem>
                <ListItem>{user.email}</ListItem>
              </List>
            </CardBody>
            <CardFooter>
              <ChakraLink as={ReactRouterLink} to={user.id.toString()}>
                View
              </ChakraLink>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
