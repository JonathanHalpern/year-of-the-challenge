import React from 'react';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent, posts }) => {
  const PageContent = contentComponent || Content;
  console.log(posts)
  return <section className="section section--gradient">
    <p>Challenges</p>
    <div className="post-list">
      {posts.filter(post => (post.node.frontmatter.templateKey === 'blog-post' && post.node.frontmatter.isCompleted)).map(({ node: post }) => {
        return (
          <div className="content post-container" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
            <p>
              <Link className="has-text-primary" to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button is-small" to={post.frontmatter.path}>
                Keep Reading →
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  </section>;
}

export default ({ data }) => {
  console.log(data)
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return <AboutPageTemplate
    contentComponent={HTMLContent}
    posts={posts}
    // title={post.frontmatter.title}
    // content={post.html}
  />;
};

// export const challengesPageQuery = graphql`
//   query ChallengePage($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;
export const challengesPageQuery = graphql`
  query ChallengePage {
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
          }
        }
      }
    }
  }
`;
