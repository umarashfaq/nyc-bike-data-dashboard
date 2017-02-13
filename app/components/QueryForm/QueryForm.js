// src
import QueryFormInner from './QueryFormInner'
import {filterRenderedStations} from '../../actions'

// libs
import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

const fields = ['station_id', 'distance']
  
class QueryForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit({station_id, distance}) {
    const {filterRenderedStations} = this.props
    filterRenderedStations(station_id, distance)
  }
  render() {
    return <QueryFormInner {...this.props} onSubmit={this.handleSubmit}/>
  }
}

const mapStateToProps = state => {
  const {entities: {stations}} = state
  const initialValues = {distance: 5}
  
  return {
    stations: Object.values(stations),
    initialValues
  }
}

export default reduxForm({
  form: 'queryForm',
  fields
}, mapStateToProps, {filterRenderedStations})(QueryForm)
