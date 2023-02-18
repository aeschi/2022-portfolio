import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="intro__footer">
        <div className="intro__footer__links">
          <a
            className="intro__footer__links__element"
            title="email"
            target="_blank"
            href="mailto:anna.eschenbacher@icloud.com"
          >
            E-Mail
          </a>
          <a
            className="intro__footer__links__element"
            title="Github"
            target="_blank"
            href="https://github.com/aeschi"
          >
            Github
          </a>
          <a
            className="intro__footer__links__element"
            title="instagram"
            target="_blank"
            href="https://www.instagram.com/anna_eschi/"
          >
            Instagram
          </a>
          <a
            className="intro__footer__links__element"
            title="LinkedIn"
            href="https://www.linkedin.com/in/anna-eschenbacher/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <Link className="intro__footer__imprint" to={`/imprintdata`}>
          Impr./Dat. © 2023 Anna Eschenbacher
        </Link>
      </footer>
    );
  }
};

export default Footer;
