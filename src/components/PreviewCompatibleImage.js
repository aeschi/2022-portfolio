import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "3px" };
  const { alt = "", childImageSharp, image, title } = imageInfo;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!!image && !!image.childImageSharp) {
    return (
      <>
        <Slider {...settings}>
          <div>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              style={imageStyle}
              alt={alt}
              title={title}
            />
          </div>
          <div>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              style={imageStyle}
              alt={alt}
              title={title}
            />
          </div>
        </Slider>
      </>
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        title={title}
      />
    );
    // for Netlify CMS
  } else if (image) {
    return <img style={{ imageStyle }} src={image} alt={alt} title={title} />;
  } else {
    return null;
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    title: PropTypes.string,
  }).isRequired,
};

export default PreviewCompatibleImage;
