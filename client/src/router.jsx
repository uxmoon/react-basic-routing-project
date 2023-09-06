import { Navigate, createBrowserRouter } from 'react-router-dom';
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
    errorElement: <h1>Error</h1>,
    children: [
      {
        errorElement: <Heading>Error</Heading>,
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
