import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ImprintPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="imprint">
      <h2>{title}</h2>
      <PageContent className="imprint__content" content={content} />
    </div>
  );
};

ImprintPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ImprintPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ImprintPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ImprintPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ImprintPage;

export const ImprintPageQuery = graphql`
  query ImprintPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
