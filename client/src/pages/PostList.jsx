import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

function PostList() {
  const posts = useLoaderData();
  return <Heading>Post List: {posts.length}</Heading>;
}

function loader({ request: { signal } }) {
  return axios
    .get('http://127.0.0.1:3000/posts', {
      signal,
    })
    .then((res) => res.data);
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
