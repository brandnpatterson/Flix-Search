import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
// import routes
import Details from './routes/Details'
import Landing from './routes/Landing'
import Search from './routes/Search'
// import JSON data
import preload from '../public/data.json'
// import styles
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => {
              return <Search shows={preload.shows} {...props} />
            }}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
})

render(
  <App />, document.getElementById('app')
)
