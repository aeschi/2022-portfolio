import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  images,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="projects__post--template">
      <div className="projects__post__imgcontainer" style={{ color: "#E25D2D" }}>
        {images.featuredimage ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: images.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
              width: images.featuredimage.childImageSharp.gatsbyImageData.width,
              height: images.featuredimage.childImageSharp.gatsbyImageData.height,
              title: `project image for ${post.frontmatter.title}`,
              images: images,
            }}
          />
        ) : null}
      </div>
      <div className="projects__post__description">
        {/* <p>{description}</p> */}
        <PostContent content={content} className={"projects__post__description__text"} />
        {tags && tags.length ? (
          <div className="projects__post__tags">
            {tags.map((tag) => (
              <p className="projects__post__tags__element" key={tag + `tag`}>
                {tag}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <div className="projects__post__titlebox" style={{ backgroundColor: "#E25D2D" }}>
        <h2 className="projects__post__titlebox__title">{title}</h2>
      </div>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        images={post.frontmatter.featuredImages}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        featuredImages {
          featuredimage {
            childImageSharp {
              gatsbyImageData(width: 500, height: 500, quality: 100, layout: CONSTRAINED)
            }
          }
          featuredimage2 {
            childImageSharp {
              gatsbyImageData(width: 500, height: 500, quality: 100, layout: CONSTRAINED)
            }
          }
          featuredimage3 {
            childImageSharp {
              gatsbyImageData(width: 500, height: 500, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
