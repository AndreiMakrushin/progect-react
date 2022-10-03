import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'
import './app.css';

const App = () => {

    const data = [
        {name: 'Andrey', salary: '6000', increase: false, id: 1}    
    ];



    return (
        <div className="app">
            <AppInfo />
            <div className='search-panel'><SearchPanel /><AppFilter /></div>
            <EmployersList data={data}/>
            <EmployersAddForm />
        </div>
    )
}
export default App