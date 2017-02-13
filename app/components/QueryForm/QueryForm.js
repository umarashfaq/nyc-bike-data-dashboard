// src
import QueryFormInner from './QueryFormInner'
import {filterRenderedStations, resetRenderedStations} from '../../actions'

// libs
import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

const fields = ['station_id', 'distance']
  
class QueryForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickResetFilter = this.handleClickResetFilter.bind(this)
  }
  handleSubmit({station_id, distance}) {
    const {filterRenderedStations} = this.props
    filterRenderedStations(station_id, distance)
  }
  handleClickResetFilter() {
    const {resetRenderedStations} = this.props
    resetRenderedStations()
  }
  render() {
    return <QueryFormInner {...this.props}
      onSubmit={this.handleSubmit}
      onClickResetFilter={this.handleClickResetFilter}/>
  }
}

const mapStateToProps = state => {
  const {entities: {stations}, lists: {renderedStations: {query, items}}} = state
  const initialValues = {distance: 5}
  const isFilterApplied = query.station_id && query.distance
  const anchor = stations[query.station_id]
  
  return {
    stations: Object.values(stations),
    items,
    query,
    anchor,
    isFilterApplied,
    initialValues
  }
}

export default reduxForm({
  form: 'queryForm',
  fields
}, mapStateToProps, {filterRenderedStations, resetRenderedStations})(QueryForm)
