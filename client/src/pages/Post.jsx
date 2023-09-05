import { useLoaderData } from 'react-router-dom';
import { getPost } from '../api/posts';
import { Heading, Text } from '@chakra-ui/react';

function Post() {
  const post = useLoaderData();
  return (
    <>
      <Heading marginBottom={4}>{post.title}</Heading>
      <Text>{post.body}</Text>
    </>
  );
}

function loader({ request: { signal }, params }) {
  return getPost(params.postId, { signal });
}

export const postRoute = {
  loader,
  element: <Post />,
};
