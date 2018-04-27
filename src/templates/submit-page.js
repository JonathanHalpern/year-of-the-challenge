import React from 'react';
import HTMLContent from '../components/Content';
import SubmitChallengeForm from '../components/SubmitChallengeForm';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <HTMLContent
        content={post.html}
      />
      <SubmitChallengeForm />
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
