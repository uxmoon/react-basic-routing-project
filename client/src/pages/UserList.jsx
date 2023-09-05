import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

function UserList() {
  const users = useLoaderData();
  return <Heading>User List: {users.length}</Heading>;
}

function loader({ request: { signal } }) {
  return axios
    .get('http://127.0.0.1:3000/users', {
      signal,
    })
    .then((res) => res.data);
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
