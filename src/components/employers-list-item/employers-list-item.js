import './employers-list-item.css'

const EmployersListItem = ({name, salary}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-cm"><i className="fas fa-cookie"></i></button>
                <button type="button" className="btn-cookie btn-cm"><i className="fas fa-trash"></i></button>
            </div>
            <i className="fas fa-star"></i>
        </li>
    )
}
export default EmployersListItem