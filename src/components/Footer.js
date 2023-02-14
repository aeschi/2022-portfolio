import * as React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div style={{ maxWidth: "100vw" }} className="columns">
          <a href="/admin/" target="_blank" rel="noopener noreferrer">
             Admin 
          </a>
          <a title="email" href="mailto:anna.eschenbacher@icloud.com">
            E-Mail 
          </a>
          <a title="Github" href="https://github.com">
            Github 
          </a>
          <a title="instagram" href="https://instagram.com">
            Instagram 
          </a>
          <a title="twitter" href="https://twitter.com">
            Twitter
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
