import * as React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="intro__footer">
        <div className="intro__footer__links">
          <a
            className="intro__footer__links__element"
            title="send me a message"
            target="_blank"
            rel="noreferrer"
            // href={atob("bWFpbHRvOmFubmEuZXNjaGVuYmFjaGVyQGljbG91ZC5jb20=")}
            href="mailto:%61%6e%6e%61%2e%65%73%63%68%65%6e%62%61%63%68%65%72%40%69%63%6c%6f%75%64%2e%63%6f%6d"
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
