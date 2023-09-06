import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PostCard({ id, title, body }) {
  return (
    <Card key={id}>
      <CardHeader>{title}</CardHeader>
      <CardBody>{body}</CardBody>
      <CardFooter>
        <ChakraLink as={ReactRouterLink} to={`/posts/${id}`}>
          View
        </ChakraLink>
      </CardFooter>
    </Card>
  );
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};
