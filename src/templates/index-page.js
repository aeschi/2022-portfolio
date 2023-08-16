import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import BlogRoll from "../components/BlogRoll";
import IndexRoll from "../components/IndexRoll";
import { Link } from "gatsby";

export const IndexPageTemplate = ({ mainpitch, description }) => {
  return (
    <div className="container">
      <div className="intro">
        <div className="intro__title">
          <h1 className="intro__title_header" id={"titlePage"} title="Hi :)">
            {mainpitch.title}
          </h1>
        </div>
        <div className="intro__index">
          <IndexRoll />
        </div>
        <div className="intro__description">
          <h3 className="intro__description__main">{mainpitch.description}</h3>
          {/* <div className="intro__index__cursor"></div> */}
          <div className="intro__description__extra">
            <p>{description}</p>
            <Link className="intro__description__extra__imprint" to={`/about`}>
              Impr./Dat. © 2023 Anna Eschenbacher
            </Link>
          </div>
        </div>

        <Footer />
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
