import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "./carousel.sass";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "0px" };
  const { alt = "", childImageSharp, image, title, images } = imageInfo;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imgArr = [];

  for (const [key, value] of Object.entries(images)) {
    imgArr.push(value);
  }

  if (!!image && !!image.childImageSharp) {
    return (
      <>
        <Slider {...settings}>
          {imgArr &&
            imgArr.map((imageElement, index) => (
              <div key={index}>
                <GatsbyImage
                  className="projects__post__imgcontainer__img"
                  image={imageElement.childImageSharp.gatsbyImageData}
                  style={imageStyle}
                  alt={alt + index}
                  title={title + index}
                />
              </div>
            ))}
        </Slider>
      </>
    );
  } else if (!!childImageSharp) {
    return (
      <>
        <Slider {...settings}>
          {imgArr &&
            imgArr.map((imageElement, index) => (
              <div key={index}>
                <GatsbyImage
                  image={imageElement.childImageSharp.gatsbyImageData}
                  style={imageStyle}
                  alt={alt + index}
                  title={title + index}
                />
              </div>
            ))}
        </Slider>
      </>
    );
    // for Netlify CMS
  } else if (image) {
    return (
      <>
        <Slider {...settings}>
          {imgArr &&
            imgArr.map((imageElement, index) => (
              <div key={index}>
                <img
                  src={imageElement}
                  style={imageStyle}
                  alt={alt + index}
                  title={title + index}
                />
              </div>
            ))}
        </Slider>
      </>
    );
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
    images: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
