import { Heading, SimpleGrid } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { getPosts } from '../api/posts';
import PostCard from '../components/PostCard';

function PostList() {
  const posts = useLoaderData();
  return (
    <>
      <Heading>Post List</Heading>
      <SimpleGrid columns={2} spacing={10}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
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
