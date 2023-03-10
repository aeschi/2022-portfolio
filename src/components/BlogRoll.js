import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

class BlogRollTemplate extends React.Component {
  state = {
    primaryColors: ["#C05756", "#6D74C2", "#87629D"],
    primaryColorsTwo: ["#4371A8E2", "#E9A040", "#E25D2D", "#448954"],
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const PostContent = HTMLContent || Content;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="projects__post" key={post.id} id={"Scroll" + post.id}>
              <div
                className="projects__post__imgcontainer"
                style={{ color: this.state.primaryColorsTwo[index % 4] }}
              >
                {post.frontmatter.featuredImages.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredImages.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      width:
                        post.frontmatter.featuredImages.featuredimage.childImageSharp
                          .gatsbyImageData.width,
                      height:
                        post.frontmatter.featuredImages.featuredimage.childImageSharp
                          .gatsbyImageData.height,
                      title: `project image for ${post.frontmatter.title}`,
                      images: post.frontmatter.featuredImages,
                    }}
                  />
                ) : null}
              </div>
              <div className="projects__post__description">
                {/* <p className="projects__post__description__text">{post.frontmatter.description}</p> */}

                <PostContent content={post.html} className={"projects__post__description__text"} />

                {post.frontmatter.tags && post.frontmatter.tags.length ? (
                  <div className="projects__post__tags">
                    {post.frontmatter.tags.map((tag) => (
                      <p className="projects__post__tags__element" key={tag + `tag`}>
                        {/* <Link to={`/tags/${kebabCase(tag)}/`}> */}
                        {tag}
                        {/* </Link> */}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
              <div
                className="projects__post__titlebox"
                style={{ backgroundColor: this.state.primaryColorsTwo[index % 4] }}
              >
                {/* <Link to={post.fields.slug}> */}
                <h2 className="projects__post__titlebox__title">
                  {index + 1 + ". "}
                  {post.frontmatter.title}
                </h2>
                {/* </Link> */}
              </div>
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
                  featuredImages {
                    featuredimage {
                      childImageSharp {
                        gatsbyImageData(width: 650, height: 650, quality: 100, layout: CONSTRAINED)
                      }
                    }
                    featuredimage2 {
                      childImageSharp {
                        gatsbyImageData(width: 650, height: 650, quality: 100, layout: CONSTRAINED)
                      }
                    }
                    featuredimage3 {
                      childImageSharp {
                        gatsbyImageData(width: 650, height: 650, quality: 100, layout: CONSTRAINED)
                      }
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
