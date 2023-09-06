import { useLoaderData } from 'react-router-dom';
import { getUser } from '../api/users';
import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

function User() {
  const user = useLoaderData();
  console.log(user);
  return (
    <>
      <Heading>{user.name}</Heading>
      <Text size='lg' marginBottom={2}>
        {user.email}
      </Text>
      <UnorderedList>
        <ListItem>Company: {user.company.name}</ListItem>
        <ListItem>Website: {user.website}</ListItem>
        <ListItem>
          Address: {user.address.street} {user.address.suite}{' '}
          {user.address.city} {user.address.zipcode}
        </ListItem>
      </UnorderedList>
    </>
  );
}

function loader({ request: { signal }, params }) {
  return getUser(params.userId, { signal });
}

export const userRoute = {
  loader,
  element: <User />,
};
