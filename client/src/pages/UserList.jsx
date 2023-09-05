import { Heading } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { getUsers } from '../api/users';

function UserList() {
  const users = useLoaderData();
  return <Heading>User List: {users.length}</Heading>;
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
