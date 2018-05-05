export const markdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatter on MarkdownRemark {
    html
    frontmatter {
      path
      title
    }
  }
`;

export const blogPostFragment = graphql`
  fragment BlogPostFragment on MarkdownRemark {
    frontmatter {
      title
      templateKey
      date(formatString: "MMMM DD, YYYY")
      path
      isCompleted
      isFailed
      evidenceImage
      isPersonal
      description
      author
      difficulty
      emotion
    }
  }
`;


export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreviewFragment on MarkdownRemark {
    id
    html
    frontmatter {
      title
      templateKey
      date(formatString: "MMMM DD, YYYY")
      path
      isCompleted
      isFailed
      evidenceImage
    }
  }
`;

export const allPagesFragment = graphql`
  fragment AllPagesFragment on RootQueryType {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {templateKey: {eq: "blog-post"}, isCompleted: {eq: true}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          ...BlogPostPreviewFragment
        }
      }
    }
  }
`
