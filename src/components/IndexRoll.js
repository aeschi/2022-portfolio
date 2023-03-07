import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import upArrow from "../img/up_arrow_fat.svg";

class IndexRollTemplate extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.updateDimensions = this.updateDimensions.bind(this);
  //   this.state = { heightSet: 0 };
  // }

  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }

  // updateDimensions() {
  //   this.setState({ heightSet: document.body.scrollHeight });
  // }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="intro__index__div" key={post.id}>
              <button
                className="intro__index__button"
                onClick={() => scrollTo("#Scroll" + post.id)}
                title="click to jump to project"
              >
                <h2 className="intro__index__button_h2">
                  {index + 1 + ". "}
                  {post.frontmatter.title}
                </h2>
              </button>
            </div>
          ))}

        <button
          className="intro__index__scrollButton--desktop"
          onClick={() => scrollTo("#Scroll" + posts[0].node.id)}
        >
          <img
            className="intro__index__scrollButton_img"
            src={upArrow}
            alt="scroll to the top"
            title="scroll to top"
          />
        </button>
        {/* {this.state.heightSet > 10 && ( */}
        <button
          className="intro__index__scrollButton--mobile"
          onClick={() => scrollTo("#titlePage")}
        >
          <img
            className="intro__index__scrollButton_img"
            src={upArrow}
            alt="scroll to the top"
            title="scroll to top"
          />
        </button>
        {/* )} */}
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
