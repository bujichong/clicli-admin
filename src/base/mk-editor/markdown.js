import React from 'react'
import Mde from 'simplemde'
import './simplemde.css'

class Markdown extends React.Component {

  componentDidMount() {
    this.loadEditor()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultValue !== nextProps.defaultValue) {
      this.mde.value(nextProps.defaultValue)
    }
  }

  loadEditor() {
    this.mde = new Mde({
      element: document.getElementById("marked"),
      autoDownloadFontAwesome: true,
      status: false,
      spellChecker: false,
      forceSync: true
    })

    this.bindMde()
  }

  bindMde() {
    this.mde.codemirror.on('change', () => {
      this.props.handleMde(this.mde.value())
    })
  }

  render() {

    return (
      <div className="simpleMDE">
        <textarea id="marked"></textarea>
      </div>
    )
  }
}

export default Markdown