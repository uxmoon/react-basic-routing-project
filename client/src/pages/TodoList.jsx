import { Heading, UnorderedList } from '@chakra-ui/react';
import { getTodos } from '../api/todos';
import { useLoaderData } from 'react-router-dom';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <Heading as='h1' marginBottom={2}>
        Todo List
      </Heading>
      <UnorderedList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
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
