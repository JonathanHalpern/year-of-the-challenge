import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const HomePageTemplate = ({ title, content, contentComponent }) => {
  console.log('load home')
  const PageContent = contentComponent || Content;
  return (<section className="section section--gradient">
    <div className="container">
      <p> Test content </p>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (<HomePageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
