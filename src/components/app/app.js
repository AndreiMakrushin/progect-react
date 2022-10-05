import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'
import './app.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Andrey', salary: '6000', increase: false, like:false, id: 1} ,
                {name: 'Alena', salary: '8000', increase: false, like:false, id: 2},
                {name: 'Di', salary: '5000', increase: false, like:false, id: 3}
            ]
        }
        this.maxId = 4;
    };

    deleteItem = (id) =>{
        this.setState(({data}) =>{
            return{
                data: data.filter(i => i.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            onLike: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    onToggleIncrease = (id) =>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }
    onToggleLike = (id) =>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item
            })
        }))
    }
    render(){
        const employees = this.state.data.length;
        const increased = this.state.data.filter(i=>i.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className='search-panel'><SearchPanel /><AppFilter /></div>
                <EmployersAddForm onAdd={this.addItem}/>
                <EmployersList data={this.state.data} onDelete={this.deleteItem} onToggleIncrease={this.onToggleIncrease} onToggleLike={this.onToggleLike}/>
                
            </div>
        )
    }
}
export default App