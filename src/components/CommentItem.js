import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { HTMLContent } from '../components/Content';

const Container = styled.div`
  margin: 15px 0 50px 0;
`;

const Author = styled.p`
  font-size: 24px;
  margin: 10px 0 0 0;
`;

const Date = styled(Moment)`
  font-size: 12px;
`;

const Message = styled.div`
  font-size: 16px;
  margin: 10px 0 0 0;
`;

const CommentItem = ({ name, date, html }) => (
  <Container>
    <Author> {name} </Author>
    <Date format="LLLL">{date}</Date>
    <Message>
      <HTMLContent content={html} />
    </Message>
  </Container>
);

export default CommentItem;
