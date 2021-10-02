import React from 'react'
import PrettierCode from 'react-prettier-code-tag'
import Alert from 'react-s-alert'

export default class ReadFile extends React.Component {
  constructor() {
    super()
    this.state = {
      filename: ''
    }
  }
  handleFileChange(event) {
    this.setState({ filename: event.target.value })
  }
  read() {
    this.props.fs.readFile(this.state.filename, 'utf8', (err, data) => {
      if (err) {
        Alert.error(err.toString())
      } else {
        Alert.success(data)
      }
    })
  }
  render() {
    return (
      <div className="card">
        <header>
          <h3>Read a file</h3>
        </header>
        <section>
          <label>
            File name (hint: use the file you wrote earlier)
            <input
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
              code={`fs.readFile('${this.state
                .filename}', 'utf8', (err, data) => {
  if (err) {
    alert(err);
  } else {
    alert(data);
  }
});`}
            />
          </label>
        </section>
        <footer>
          <label className="button" onClick={this.read.bind(this)}>
            Run it!
          </label>
        </footer>
      </div>
    )
  }
}
