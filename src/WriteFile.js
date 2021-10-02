import React from "react";
import PrettierCode from "react-prettier-code-tag";
import Alert from "react-s-alert";

export default class WriteFile extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      filename: ""
    };
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleFileChange(event) {
    this.setState({ filename: event.target.value });
  }
  write() {
    this.props.fs.writeFile(
      this.state.filename,
      this.state.text,
      "utf8",
      err => {
        if (err) {
          //alert(err)
          Alert.error(err.toString());
        } else {
          Alert.success("success!");
        }
      }
    );
  }
  render() {
    return (
      <div className="card">
        <header>
          <h3>Write content to a file</h3>
        </header>
        <section>
          <label>
            File contents
            <textarea
              value={this.state.text}
              onChange={this.handleChange.bind(this)}
              placeholder="e.g. &quot;Hello World!&quot;"
            />
          </label>
          <label>
            File name
            <input
              className="stretchy"
              type="text"
              placeholder="e.g. filename.txt"
              value={this.state.filename}
              onChange={this.handleFileChange.bind(this)}
            />
          </label>
          <hr />
          <label>
            Code to do it:
            <PrettierCode
              customStyle={{ background: undefined }}
              code={`let text = \`${this.state.text}\`;
fs.writeFile('${this.state.filename}', text, 'utf8',  err => {
  if (err) {
    alert(err);
  } else {
    alert("success!");
  }
});`}
            />
          </label>
        </section>
        <footer>
          <label className="button" onClick={this.write.bind(this)}>
            Run it!
          </label>
        </footer>
      </div>
    );
  }
}
