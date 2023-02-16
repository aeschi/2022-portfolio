import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const PostContent = HTMLContent || Content;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="projects_post" key={post.id}>
              {post.frontmatter.featuredimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    width: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width,
                    height: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height,
                  }}
                />
              ) : null}
              <Link className="title" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>

              <p>{post.frontmatter.description}</p>

              {/* <PostContent content={post.html} /> */}

              {post.frontmatter.tags && post.frontmatter.tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {post.frontmatter.tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                html
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  tags
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(width: 300, quality: 100, layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
