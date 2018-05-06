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


// export const allCompletedQuery = graphql`
// query AllCompletedQuery {
//   postList: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {templateKey: {eq: "blog-post"}, isCompleted: {eq: true}}}) {
//     edges {
//       node {
//         excerpt(pruneLength: 400)
//         {
//          id
//          html
//          frontmatter {
//            title
//            templateKey
//            date(formatString: "MMMM DD, YYYY")
//            path
//            isCompleted
//            isFailed
//            evidenceImage
//          }
//        }
//       }
//     }
//   },
// `;

export const currentPageFragment = graphql`
  fragment CurrentPageFragment on RootQueryType {
    currentPageMarkdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export const completedChallengesMarkdownFragment = graphql`
  fragment CompletedChallengesMarkdownFragment on RootQueryType {
    completedChallengesMarkdownRemark: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {templateKey: {eq: "blog-post"}, isCompleted: {eq: true}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
      }
    }
  }
`;

export const incompleteChallengesMarkdownFragment = graphql`
  fragment IncompleteChallengesMarkdownFragment on RootQueryType {
    incompleteChallengesMarkdownRemark: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {templateKey: {eq: "blog-post"}, isCompleted: {eq: false}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            isCompleted
            isPersonal
            evidenceImage
            description
            author
            difficulty
            emotion
          }
        }
      }
    }
  }
`;

export const allCommentsFragment = graphql`
  fragment AllCommentsFragment on RootQueryType {
    comments: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {frontmatter: {templateKey: {eq: "comments"}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          html
          id
          frontmatter {
            name
            date
            post
          }
        }
      }
    }
  }
`;
