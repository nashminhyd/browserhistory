import './index.css'

const BrowserItem = props => {
  const {initialHistoryList, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistoryList
  const onDeleteUser = () => {
    onDelete(id)
  }
  return (
    <li className="list-item">
      <div className="sm-con">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="para1">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" className="delete" onClick={onDeleteUser}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="logo2"
        />
      </button>
    </li>
  )
}
export default BrowserItem
