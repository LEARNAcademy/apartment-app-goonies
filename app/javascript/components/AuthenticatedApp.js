import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/users/apartments" exact component={Apartments} />
            <Route path="/users/new-apartment" exact component={NewApartment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
