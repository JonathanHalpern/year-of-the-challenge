export const markdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatter on MarkdownRemark {
    html
    frontmatter {
      path
      title
    }
  }
`;

export const markdownCommentFragment = graphql`
  fragment MarkdownCommentFrontmatter on MarkdownRemark {
    html
    id
    frontmatter {
      name
      date
      post
    }
  }
`;

export const completedChallengeMarkdownFrontmatter = graphql`
  fragment CompletedChallengeMarkdownFrontmatter on MarkdownRemark {
    html
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

//
// export const blogPostPreviewFragment = graphql`
//   fragment BlogPostPreviewFragment on MarkdownRemark {
//     id
//     html
//     frontmatter {
//       title
//       templateKey
//       date(formatString: "MMMM DD, YYYY")
//       path
//       isCompleted
//       isFailed
//       evidenceImage
//     }
//   }
// `;

export const currentPageFragment = graphql`
  fragment CurrentPageFragment on RootQueryType {
    currentPageMarkdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...MarkdownFrontmatter
    }
  }
`;

export const currentChallengeFragment = graphql`
  fragment CurrentChallengeFragment on RootQueryType {
    currentChallengeMarkdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...CompletedChallengeMarkdownFrontmatter
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

export const allCommentsMarkdownFragment = graphql`
  fragment AllCommentsMarkdownFragment on RootQueryType {
    allCommentsMarkdown: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {frontmatter: {templateKey: {eq: "comments"}}}) {
      edges {
        node {
          ...MarkdownCommentFrontmatter
        }
      }
    }
  }
`;

export const commentsMarkdownFragment = graphql`
  fragment CommentsMarkdownFragment on RootQueryType {
    commentsMarkdown: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {frontmatter: {templateKey: {eq: "comments"}, post: {eq: $path}}}) {
      edges {
        node {
          ...MarkdownCommentFrontmatter
        }
      }
    }
  }
`;
