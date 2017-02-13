// src
import styles from './PageMain.less'
import globalStyles from '../common.less'
import MUITheme from '../../../config/theme'
import Page from '../Page/Page'
import MapView from '../MapView/MapView'

// libs
import React from 'react'
import {Provider} from 'react-redux'
import Paper from 'material-ui/Paper'

export default class PageMain extends Page {
  constructor(props) {
    super(props)
  }
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <div className={styles.root}>
          <MapView markers={[]}/>
        </div>
      </Provider>
    )
  }
}

PageMain.childContextTypes = {
  muiTheme: React.PropTypes.object
}
