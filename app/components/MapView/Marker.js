// src
import styles from './Marker.less'

// libs
import React from 'react'
import {connect} from 'react-redux'

class Marker extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {$hover, station: {name, capacity, num_bikes_available}} = this.props
    let info
    const rootHoverStyle = {}
    const availability = num_bikes_available / capacity * 100
    let className
    
    if (availability > 75) {
      className = `${styles.root} ${styles.green}`
    } else if (availability === 0) {
      className = `${styles.root} ${styles.red}`
    } else {
      className = `${styles.root} ${styles.orange}`
    }
    
    if ($hover) {
      console.log('hover detected')
      info = <div className={styles.info}>{name}<br/>
        capacity: {capacity}<br/>
        num_bikes_available: {num_bikes_available}<br/>
        availability: {availability}%</div>
    }
    
    return (
       <div className={className}>
          {info}
       </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {entities: {stations}} = state
  const station = stations[ownProps.id]
  
  return {station}
}

export default connect(mapStateToProps)(Marker)
