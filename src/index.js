import React from 'react'
import { render } from 'react-dom'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import WriteFile from './WriteFile'
import ReadFile from './ReadFile'
import DirList from './DirList'
import LearnMore from './LearnMore'
import Setup from './Setup'
const BrowserFS = require('browserfs')

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: '2em'
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      thefilepickedinstep2: ''
    }
  }
  pickfileinstep2(value) {
    this.setState({ thefilepickedinstep2: value })
  }
  render() {
    return (
      <div style={styles}>
        <h2>
          {'\u2728'} You should be using BrowserFS! {'\u2728'}
        </h2>
        <div>
          <p>
            Read all about it here:{' '}
            <a href="https://github.com/jvilk/BrowserFS">
              https://github.com/jvilk/BrowserFS
            </a>
          </p>
          <blockquote>
            BrowserFS is an in-browser filesystem that emulates the Node JS
            filesystem API and supports storing and retrieving files from
            various backends.
          </blockquote>
        </div>
        <p />
        <Setup />
        <WriteFile fs={window.fs} />
        <DirList fs={window.fs} onChange={this.pickfileinstep2.bind(this)} />
        <ReadFile fs={window.fs} file={this.state.thefilepickedinstep2} />
        <LearnMore />
        <Alert stack={{ limit: 3 }} effect="scale" />
      </div>
    )
  }
}
// Configures BrowserFS to use the LocalStorage file system.
BrowserFS.install(window)
BrowserFS.configure(
  {
    fs: 'LocalStorage'
  },
  function(e) {
    if (e) {
      // An error happened!
      throw e
    }
    // Otherwise, BrowserFS is ready-to-use!
    window.fs = window.require('fs')
  }
)

render(<App />, document.getElementById('root'))
