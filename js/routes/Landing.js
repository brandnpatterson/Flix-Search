import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Flix Search</h1>
        <Link to='/search'>Start</Link>
      </div>
    )
  }
})

export default Landing
