import { ListItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function TodoItem({ completed, title }) {
  return (
    <ListItem textDecoration={completed && 'line-through'}>{title}</ListItem>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool,
  title: PropTypes.string,
};
