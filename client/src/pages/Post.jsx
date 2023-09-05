import { useLoaderData } from 'react-router-dom';
import { getPost } from '../api/posts';

function Post() {
  const post = useLoaderData();
  return <div>Title: {post.title}</div>;
}

function loader({ request: { signal }, params }) {
  return getPost(params.postId, { signal });
}

export const postRoute = {
  loader,
  element: <Post />,
};
