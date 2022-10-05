
import './employers-list-item.css'

const EmployersListItem = (props)=>{

    
    const  {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;
    
    
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase){
        classNames += ' increase';
    }
     if (like) {
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-cm"><i className="fas fa-cookie" onClick={onToggleIncrease}></i></button>
                <button type="button" className="btn-cookie btn-cm"><i className="fas fa-trash" onClick={onDelete}></i></button>
            </div>
            <i className="fas fa-star"></i>
        </li>
    )
    
}
export default EmployersListItem