import { Link as ReactRouterLink, useLoaderData } from 'react-router-dom';
import { getPost } from '../api/posts';
import {
  Heading,
  Text,
  Link as ChakraLink,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { getUser } from '../api/users';
import { getComments } from '../api/comments';

function Post() {
  const { comments, post, user } = useLoaderData();

  return (
    <>
      <Heading marginBottom={4}>{post.title}</Heading>
      <Text fontSize='lg' marginBottom={2}>
        By{' '}
        <ChakraLink as={ReactRouterLink} to={`/users/${user.id}`}>
          {user.name}
        </ChakraLink>
      </Text>
      <Text>{post.body}</Text>
      <Heading as='h3' size='lg' marginY={4}>
        Comments
      </Heading>
      {comments.map((comment) => (
        <Card key={comment.id} marginBottom={3}>
          <CardBody>
            <Text fontSize='sm' color={'gray.600'} marginBottom={1}>
              {comment.email}
            </Text>
            <Text>{comment.body}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

async function loader({ request: { signal }, params: { postId } }) {
  const comments = getComments(postId, { signal });
  const post = await getPost(postId, { signal });
  const user = getUser(post.userId, { signal });
  return { comments: await comments, post, user: await user };
}

export const postRoute = {
  loader,
  element: <Post />,
};
