// src
import styles from './QueryFormInner.less'

// libs
import React from 'react'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const renderFilterInfo = props => {
  const {query: {distance}, items, anchor, onClickResetFilter} = props
  
  return <Paper>
    <div className={styles.container}>
      <p><strong>{items.length}</strong> stations are located in <strong>{distance}</strong> kilometers radius of <strong>{anchor.name}</strong></p>
      <a href="#" onClick={onClickResetFilter}>Reset filter</a>
    </div>
  </Paper>
}

const renderForm = props => {
  const {stations, fields: {
    station_id, distance
  }, handleSubmit, onSubmit, submitting} = props
  const fnSubmit = handleSubmit(onSubmit)
  
  return <Paper>
    <form className={styles.container} onSubmit={fnSubmit}>
      <h2>Filter Stations</h2>
      <label>Station</label><br/>
      <select {...station_id} disabled={submitting}>
        <option value={null}>Select a value</option>
        {stations.map(({station_id, name}) => <option key={station_id} value={station_id}>{name}</option>)}
      </select>
      <TextField floatingLabelText="Distance (in kilometers)" fullWidth {...distance} disabled={submitting}/>
      <RaisedButton label="Apply Filter" primary disabled={submitting} onClick={fnSubmit}/>
    </form>
  </Paper>
}

const QueryFormInner = props => {
  const {isFilterApplied} = props
  
  return isFilterApplied ? renderFilterInfo(props) : renderForm(props)
}

export default QueryFormInner
