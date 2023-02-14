import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ mainpitch, description }) => {
  return (
    <div>
      <div className="content">
        <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
        </div>
        <div className="column is-12">
          <BlogRoll />
        </div>

        <div className="tile">
          <h3 className="subtitle">{mainpitch.description}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate mainpitch={frontmatter.mainpitch} description={frontmatter.description} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
        }
        description
        intro {
          heading
          description
        }
      }
    }
  }
`;
