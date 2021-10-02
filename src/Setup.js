import React from "react";
import PrettierCode from "react-prettier-code-tag";

export default class Setup extends React.Component {
  render() {
    return (
      <div className="card">
        <header>
          <h3>Setup</h3>
        </header>
        <section>
          <p>
            Before you can use the "filesystem" you must configure it.
            LocalStorage is the easiest, but there are many others including
            InMemory, IndexedDB, HTTPRequest, and even Dropbox.
          </p>
          <hr />
          <label>
            Code to do it:
            <PrettierCode
              customStyle={{ background: undefined }}
              code={`const BrowserFS = require("browserfs");
BrowserFS.install(window);
BrowserFS.configure(
  { fs: "LocalStorage" }, (err) => {
  if (err) {
    alert(err);
  } else {
    window.fs = window.require("fs");
  }
});`}
            />
          </label>
        </section>
        <footer>(This code ran when the page loaded.)</footer>
      </div>
    );
  }
}
