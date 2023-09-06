import { Navigate, createBrowserRouter, useRouteError } from 'react-router-dom';
import { postListRoute } from './pages/PostList';
import { userListRoute } from './pages/UserList';
import { todoListRoute } from './pages/TodoList';
import { RootLayout } from './layouts/RootLayout';
import { postRoute } from './pages/Post';
import { userRoute } from './pages/User';
import { Heading } from '@chakra-ui/react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to='/posts' /> },
          {
            path: 'posts',
            children: [
              {
                index: true,
                ...postListRoute,
              },
              { path: ':postId', ...postRoute },
            ],
          },
          {
            path: 'users',
            children: [
              { index: true, ...userListRoute },
              { path: ':userId', ...userRoute },
            ],
          },
          { path: 'todos', ...todoListRoute },
          { path: '*', element: <h1>404 - page not found</h1> },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Heading>Error - Something went wrong</Heading>
      {import.meta.env.MODE !== 'production' && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
