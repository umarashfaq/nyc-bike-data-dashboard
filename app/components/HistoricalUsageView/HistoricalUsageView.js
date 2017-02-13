// src
import HistoricalUsageViewInner from './HistoricalUsageViewInner'

// libs
import React from 'react'
import {connect} from 'react-redux'

class HistoricalUsageView extends React.Component {
  constructor(props) {
    super(props)
    const {historicalUsageGlobal} = props
    
    this.state = {
      selectedStation: -1,
      usage: historicalUsageGlobal
    }
    this.handleChangeSelectedStation = this.handleChangeSelectedStation.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    const {historicalUsageGlobal} = nextProps
    
    if (this.state.selectedStation < 0) {
      this.setState({usage: historicalUsageGlobal})
    }
  }
  handleChangeSelectedStation(e) {
    const {stations, historicalUsageGlobal} = this.props
    const {value} = e.target
    const nextState = {selectedStation: e.target.value}
    
    if (value > 0) {
      const {status_history} = stations[value]
      Object.assign(nextState, {usage: status_history})
    } else {
      Object.assign(nextState, {usage: historicalUsageGlobal})
    }
    
    this.setState(nextState)
  }
  render() {
    return <HistoricalUsageViewInner {...this.props} {...this.state}
      onChangeSelectedStation={this.handleChangeSelectedStation}/>
  }
}

const mapStateToProps = state => {
  const {aggregates: {historicalUsage}, entities: {stations}} = state
  return {
    historicalUsageGlobal: historicalUsage, 
    stations
  }
}

export default connect(mapStateToProps)(HistoricalUsageView)
