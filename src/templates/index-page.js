import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ mainpitch, description }) => {
  return (
    <div className="container">
      <div className="intro">
        <div className="intro__title">
          <h1 className="intro__title_header">{mainpitch.title}</h1>
        </div>
        <div className="intro__index">
          <h2>1. Klimakarten</h2>
          <h2>2. Die gute Nachricht</h2>
          <h2>3. Rongin Shagor</h2>
          <h2>4. Real Time War Rug</h2>
          <h2>5. Kind acts of cruelty</h2>
          <h2>6. Walking Home Alone</h2>
          <h2>7. XXXXX</h2>
          <h2>8. XXX</h2>
          <h2>9. Archive</h2>
        </div>
        <div className="intro__description">
          <h3 className="intro__description__main">{mainpitch.description}</h3>
          <p className="intro__description__extra">{description}</p>
        </div>

        <div className="intro__footer">
          <Footer />
        </div>
      </div>
      <div className="projects">
        <BlogRoll />
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
      }
    }
  }
`;
