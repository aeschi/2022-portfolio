import React from "react";
import PropTypes from "prop-types";
import { ImprintPageTemplate } from "../../templates/imprint-page";

const ImprintPagePreview = ({ entry, widgetFor }) => (
  <ImprintPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

ImprintPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ImprintPagePreview;
