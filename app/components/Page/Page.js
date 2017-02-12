// src
import MUITheme from '../../../config/theme'

// libs
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  getChildContext() {
    return {
      muiTheme: getMuiTheme(MUITheme)
    }
  }
  render() {
    return (
      <div>BaseRootComponent</div>
    )
  }
}
