import React from "react";
import PrettierCode from "react-prettier-code-tag";
import Alert from "react-s-alert";

export default class WriteFile extends React.Component {
  constructor() {
    super();
    this.state = {
      dirname: "/"
    };
  }
  handleFileChange(event) {
    this.setState({ dirname: event.target.value });
  }
  readdir() {
    this.props.fs.readdir(this.state.dirname, (err, files) => {
      if (err) {
        Alert.error(err.toString());
      } else {
        Alert.success(files.join(", "));
      }
    });
  }
  render() {
    return (
      <div className="card">
        <header>
          <h3>Read a directory</h3>
        </header>
        <section>
          <label>
            Directory name (hint: try reading the root directory '/')
            <input
              type="text"
              placeholder="e.g. /"
              value={this.state.filename}
              onChange={this.handleFileChange.bind(this)}
            />
          </label>
          <hr />
          <label>
            Code to do it:
            <PrettierCode
              customStyle={{ background: undefined }}
              code={`fs.readdir('${this.state.dirname}', (err, files) => {
  if (err) {
    alert(err);
  } else {
    alert(files.join(', '));
  }
});`}
            />
          </label>
        </section>
        <footer>
          <label className="button" onClick={this.readdir.bind(this)}>
            Run it!
          </label>
        </footer>
      </div>
    );
  }
}
