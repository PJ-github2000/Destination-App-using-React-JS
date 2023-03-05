/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="destination-container">
          <h1 className="heading-text">Destination Search</h1>
          <div className="input-background">
            <input
              type="search"
              value={searchInput}
              className="input-element"
              placeholder="Enter Text"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="result-container">
            {searchResults.map(eachPlace => (
              <DestinationItem
                key={eachPlace.id}
                destinationDetails={eachPlace}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
