import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { getTodos } from '../api/todos';
import { useLoaderData } from 'react-router-dom';

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <Heading>Todo List</Heading>
      <UnorderedList>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            textDecoration={todo.completed && 'line-through'}
          >
            {todo.title}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
