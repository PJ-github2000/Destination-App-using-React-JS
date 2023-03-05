/* eslint-disable no-unused-vars */
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li className="list-item">
      <div>
        <img className="app-image" src={imgUrl} alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
