import { Component } from 'react';

import './employers-list-item.css'

class EmployersListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }  

    onIncrease = () =>{
        this.setState(({increase})=>({
            increase: !increase
        }))
    }
    onLike = () =>{
        this.setState(({like})=>({
            like: !like}))
    }
    render(){
    const  {name, salary} = this.props;
    const {increase} = this.state;
    const {like} = this.state;
    
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase){
        classNames += ' increase';
    }
     if (like) {
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-cm"><i className="fas fa-cookie" onClick={this.onIncrease}></i></button>
                <button type="button" className="btn-cookie btn-cm"><i className="fas fa-trash"></i></button>
            </div>
            <i className="fas fa-star"></i>
        </li>
    )
    }
}
export default EmployersListItem