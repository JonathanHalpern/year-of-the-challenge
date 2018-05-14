export const pageFrontmatterFragment = graphql`
  fragment PageFrontmatterFragment on MarkdownRemark {
    html
    frontmatter {
      path
      title
    }
  }
`

export const commentFrontmatterFragment = graphql`
  fragment CommentFrontmatterFragment on MarkdownRemark {
    html
    id
    frontmatter {
      name
      date
      post
    }
  }
`

export const completedChallengeFrontmatterFragment = graphql`
  fragment CompletedChallengeFrontmatterFragment on MarkdownRemark {
    html
    frontmatter {
      title
      templateKey
      date(formatString: "MMMM DD, YYYY")
      path
      isCompleted
      isFailed
      isPersonal
      description
      author
      difficulty
      emotion
    }
  }
`

export const completedChallengePreviewFrontmatterFragment = graphql`
  fragment CompletedChallengePreviewFrontmatterFragment on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      path
      isFailed
      evidenceImage {
        publicURL
        childImageSharp {
          sizes(maxWidth: 1240) {
            srcSet
          }
        }
      }
      isPersonal
    }
  }
`

export const incompleteChallengeFrontmatterFragment = graphql`
  fragment IncompleteChallengeFrontmatterFragment on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      isPersonal
      path
      description
      author
      difficulty
      emotion
    }
  }
`

export const currentPageFragment = graphql`
  fragment CurrentPageFragment on RootQueryType {
    currentPageMarkdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...PageFrontmatterFragment
    }
  }
`

export const currentChallengeFragment = graphql`
  fragment CurrentChallengeFragment on RootQueryType {
    currentChallengeMarkdown: markdownRemark(
      frontmatter: { path: { eq: $path } }
    ) {
      ...CompletedChallengeFrontmatterFragment
    }
  }
`

export const completedChallengesMarkdownFragment = graphql`
  fragment CompletedChallengesMarkdownFragment on RootQueryType {
    completedChallengesMarkdownRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          isCompleted: { eq: true }
        }
      }
    ) {
      edges {
        node {
          ...CompletedChallengePreviewFrontmatterFragment
        }
      }
    }
  }
`

export const incompleteChallengesMarkdownFragment = graphql`
  fragment IncompleteChallengesMarkdownFragment on RootQueryType {
    incompleteChallengesMarkdownRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          isCompleted: { eq: false }
        }
      }
    ) {
      edges {
        node {
          ...IncompleteChallengeFrontmatterFragment
        }
      }
    }
  }
`

export const allCommentsMarkdownFragment = graphql`
  fragment AllCommentsMarkdownFragment on RootQueryType {
    allCommentsMarkdown: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "comments" } } }
    ) {
      edges {
        node {
          ...CommentFrontmatterFragment
        }
      }
    }
  }
`

export const commentsMarkdownFragment = graphql`
  fragment CommentsMarkdownFragment on RootQueryType {
    commentsMarkdown: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: {
        frontmatter: { templateKey: { eq: "comments" }, post: { eq: $path } }
      }
    ) {
      edges {
        node {
          ...CommentFrontmatterFragment
        }
      }
    }
  }
`
