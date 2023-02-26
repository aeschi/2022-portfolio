import * as React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="intro__footer">
        <div className="intro__footer__links">
          <a
            className="intro__footer__links__element"
            title="email"
            target="_blank"
            rel="noreferrer"
            href="mailto:anna.eschenbacher@icloud.com"
          >
            E-Mail
          </a>
          <a
            className="intro__footer__links__element"
            title="Github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aeschi"
          >
            Github
          </a>
          <a
            className="intro__footer__links__element"
            title="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/anna_eschi/"
          >
            Instagram
          </a>
          <a
            className="intro__footer__links__element"
            title="LinkedIn"
            href="https://www.linkedin.com/in/anna-eschenbacher/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
