import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Content, { HTMLContent } from '../components/Content';

// export const HomePageTemplate = ({ title, content, contentComponent }) => {
//   console.log('load home')
//   const PageContent = contentComponent || Content;
//   return (<section className="section section--gradient">
//     <div className="container">
//       <div className="columns">
//         <div className="column is-10 is-offset-1">
//           <div className="section">
//             <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
//             <PageContent className="content" content={content} />
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>);
// };

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    console.log(this.props.data)
    const { data } = this.props;
    // const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Challenges</h1>
          </div>
          {/* <HomePageTemplate
            contentComponent={HTMLContent}
            title={data.markdownRemark.frontmatter.title}
            content={data.markdownRemark.html}
          /> */}
          {/* <div className="post-list">
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
          </div> */}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
# query IndexQuery() {
#   markdownRemark(frontmatter: { path: { eq: '/home' } }) {
#     html
#     frontmatter {
#       path
#       title
#     }
#   },
  query IndexQuery {
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
