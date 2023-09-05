import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { getPosts } from '../api/posts';

function PostList() {
  const posts = useLoaderData();
  return (
    <>
      <Heading>Post List: {posts.length}</Heading>
      <SimpleGrid columns={2} spacing={10}>
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>{post.title}</CardHeader>
            <CardBody>{post.body}</CardBody>
            <CardFooter>
              <ChakraLink as={ReactRouterLink} to={`/posts/${post.id}`}>
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
  return getPosts({ signal });
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
