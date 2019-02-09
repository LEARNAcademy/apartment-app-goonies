import React from "react"
import PropTypes from "prop-types"
import NewApartment from './pages/NewApartment'
import Apartments from './pages/Apartments'

class AllApartments extends React.Component {
  render () {
    return (
      <div>
        <h1> all-appartments page</h1>
        <h1>My Apartments</h1>
          <table>
            <tbody>
              <tr>
                <th>Address</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>State</th>
                <th>Country</th>
              </tr>

              {this.state.apartments.map((apartment, index) => {
                return(
              <tr key={index}>
                <td>{apartment.address}</td>
                <td>{apartment.city}</td>
                <td>{apartment.zipcode}</td>
                <td>{apartment.state}</td>
                <td>{apartment.country}</td>
              </tr>
            )
          })}
            </tbody>
          </table>
        <h1> should render the list of all apartments.  </h1>
        <h1> will include path to Apartments component</h1>
      </div>

    );
  }
}

export default AllApartments
