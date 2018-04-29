import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

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

const Message = styled.p`
  font-size: 16px;
  margin: 10px 0 0 0;
`;

const CommentItem = props => (
  <Container>
    <Author> {props.name} </Author>
    <Date format="LLLL">{props.date}</Date>
    <Message> {props.message} </Message>
  </Container>
);

export default CommentItem;
