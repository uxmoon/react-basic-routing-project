import { useLoaderData } from 'react-router-dom';
import { getUser } from '../api/users';
import {
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { getPosts } from '../api/posts';
import { getTodos } from '../api/todos';
import PostCard from '../components/PostCard';
import TodoItem from '../components/TodoItem';

function User() {
  const { user, posts, todos } = useLoaderData();
  return (
    <>
      <Heading>{user.name}</Heading>
      <Text size='lg' marginBottom={2}>
        {user.email}
      </Text>
      <UnorderedList marginBottom={4}>
        <ListItem>Company: {user.company.name}</ListItem>
        <ListItem>Website: {user.website}</ListItem>
        <ListItem>
          Address: {user.address.street} {user.address.suite}{' '}
          {user.address.city} {user.address.zipcode}
        </ListItem>
      </UnorderedList>
      <Heading as='h3' fontSize='lg' marginBottom={2}>
        Posts
      </Heading>
      <SimpleGrid columns={2} spacing={10} marginBottom={4}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </SimpleGrid>
      <Heading as='h3' fontSize='lg' marginBottom={2}>
        Todos
      </Heading>
      <UnorderedList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </UnorderedList>
    </>
  );
}

async function loader({ request: { signal }, params: { userId } }) {
  const posts = getPosts({ signal, params: { userId } });
  const todos = getTodos({ signal, params: { userId } });
  const user = getUser(userId, { signal });
  return { posts: await posts, todos: await todos, user: await user };
}

export const userRoute = {
  loader,
  element: <User />,
};
