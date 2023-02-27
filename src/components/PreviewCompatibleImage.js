import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
import "./carousel.sass";
// import "slick-carousel/slick/slick-theme.css";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "3px" };
  const { alt = "", childImageSharp, image, title, images } = imageInfo;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // images.map(((img)) => (
  //   console.log(img);
  // // ));

  // Object.keys(images).forEach(function (img, index) {
  //   console.log(img);
  // });
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
                {console.log(imageElement.childImageSharp.gatsbyImageData)}
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
