import React from 'react';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Columns from 'react-columns';
import Grid from 'material-ui/Grid';
import Content, { HTMLContent } from '../components/Content';
import ChallengeItem from '../components/ChallengeItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const SubmitForm = () => (
  <form
    name="newChallenges"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    <input style={{ display: 'none' }} type="text" name="form-name" value="newChallenges" />
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          label="Your name"
          name="name"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          label="Email"
          name="email"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="challenge"
          label="Your challenge"
          name="challenge"
          fullWidth
          multiline
          rows={3}
        />
      </Grid>
    </Grid>
    <SubmitButton color="primary" raised type="submit">
      Send
    </SubmitButton>
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