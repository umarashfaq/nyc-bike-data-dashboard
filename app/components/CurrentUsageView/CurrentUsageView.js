// src
import CurrentUsageViewInner from './CurrentUsageViewInner'

// libs
import React from 'react'
import {connect} from 'react-redux'

class CurrentUsageView extends React.Component {
  constructor(props) {
    super(props)
    const {currentUsageGlobal: {capacity, num_bikes_available}} = props
    
    this.state = {
      selectedStation: -1,
      capacity,
      num_bikes_available
    }
    this.handleChangeSelectedStation = this.handleChangeSelectedStation.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    const {currentUsageGlobal} = nextProps
    this.setState(currentUsageGlobal)
  }
  handleChangeSelectedStation(e) {
    const {stations, currentUsageGlobal} = this.props
    const {value} = e.target
    const nextState = {selectedStation: e.target.value}
    
    if (value > 0) {
      const {capacity, num_bikes_available} = stations[value]
      Object.assign(nextState, {capacity, num_bikes_available})
    } else {
      Object.assign(nextState, currentUsageGlobal)
    }
    
    this.setState(nextState)
  }
  render() {
    return <CurrentUsageViewInner {...this.props} {...this.state}
      onChangeSelectedStation={this.handleChangeSelectedStation}/>
  }
}

const mapStateToProps = state => {
  const {aggregates: {currentUsage}, entities: {stations}} = state
  return {
    currentUsageGlobal: currentUsage, 
    stations
  }
}

export default connect(mapStateToProps)(CurrentUsageView)
