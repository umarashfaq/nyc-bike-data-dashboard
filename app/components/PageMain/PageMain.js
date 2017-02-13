// src
import styles from './PageMain.less'
import globalStyles from '../common.less'
import MUITheme from '../../../config/theme'
import Page from '../Page/Page'
import MapView from '../MapView/MapView'
import QueryForm from '../QueryForm/QueryForm'
import CurrentUsageView from '../CurrentUsageView/CurrentUsageView'
import HistoricalUsageView from '../HistoricalUsageView/HistoricalUsageView'

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
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Real-time NYC Bike Sharing Data Dashboard</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <MapView />
              </div>
              <div className="col-lg-4">
                <QueryForm />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <CurrentUsageView />
              </div>
              <div className="col-lg-4">
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <HistoricalUsageView />
              </div>
              <div className="col-lg-4">
              </div>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

PageMain.childContextTypes = {
  muiTheme: React.PropTypes.object
}
