import EmployersListItem from "../employers-list-item/employers-list-item";
import '../employers-list/employers-list.css'


const EmployersList = ({data, onDelete, onToggleIncrease, onToggleLike}) =>{

    const elements = data.map(item=>{
        const {id, ...itemProps} = item
        return(<EmployersListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)} 
            onToggleIncrease={() => onToggleIncrease(id)} 
            onToggleLike={() => onToggleLike(id)}
            
            />)})
    return(
        <ul className="app-list list-group">
            {elements}
            
        </ul>
    )
}
export default EmployersList