import React from 'react'
import { Link } from 'react-router'
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.props.handleSearchTermChange}
        value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }

    return (
      <header>
        <h1>
          <Link to='/'>Flix Search</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

export default Header
