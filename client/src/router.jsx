import { Navigate, createBrowserRouter } from 'react-router-dom';
import { postListRoute } from './pages/PostList';
import { userListRoute } from './pages/UserList';
import { todoListRoute } from './pages/TodoList';
import { RootLayout } from './layouts/RootLayout';
import { postRoute } from './pages/Post';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
      { path: 'users', ...userListRoute },
      { path: 'todos', ...todoListRoute },
    ],
  },
]);
