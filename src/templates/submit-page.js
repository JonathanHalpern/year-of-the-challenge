import React from 'react';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Columns from 'react-columns';
import Grid from 'material-ui/Grid';
import Content, { HTMLContent } from '../components/Content';
import ChallengeItem from '../components/ChallengeItem';

export const SubmitForm = () => (
  <form
    name="newChallenges"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    <input style={{ display: 'none' }} type="text" name="form-name" value="newChallenges" />
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Your challenge: <textarea name="message" maxLength="50" /></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <HTMLContent
        content={post.html}
      />
      <SubmitForm />
    </div>);
};

export const submitPageQuery = graphql`
  query SubmitPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    },
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            isCompleted
            evidenceImage
            description
            author
            difficulty
          }
        }
      }
    }
  }
`;
