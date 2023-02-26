import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
// import scrollTo from "gatsby-plugin-smoothscroll";

class IndexRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }, index) => (
            <div key={post.id}>
              <button onClick={console.log("hi " + index)}>
                <h2>
                  {index + 1 + ". "}
                  {post.frontmatter.title}
                </h2>
              </button>
            </div>
          ))}
      </div>
    );
  }
}

IndexRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function IndexRoll() {
  return (
    <StaticQuery
      query={graphql`
        query IndexRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <IndexRollTemplate data={data} count={count} />}
    />
  );
}
