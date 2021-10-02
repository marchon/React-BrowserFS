import React from "react";

export default class LearnMore extends React.Component {
  render() {
    return (
      <div className="card">
        <header>
          <h3>Learn more</h3>
        </header>
        <section>
          <p>
            You can of course make directories too. In fact, the entire 'fs' API
            is available. Some backends even support symlinks!
          </p>
          <br />
          <p>
            You could use BrowserFS to add offline support for you app. Or allow
            saving projects and settings locally. Or to enable applications that
            normally need a filesystem to run in the browser. The possibilities
            are limitless!
          </p>
          <br />
          <p>
            <span>Github: </span>
            <a href="https://github.com/jvilk/BrowserFS">
              https://github.com/jvilk/BrowserFS
            </a>
          </p>
          <p>
            <span>Website / docs: </span>
            <a href="http://jvilk.com/browserfs/1.4.1/">
              http://jvilk.com/browserfs/1.4.1/
            </a>
          </p>
          <p>
            <span>Node.js 'fs' API: </span>
            <a href="https://nodejs.org/api/fs.html">
              https://nodejs.org/api/fs.html
            </a>
          </p>
        </section>
        <footer />
      </div>
    );
  }
}
