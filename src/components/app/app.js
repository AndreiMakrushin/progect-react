import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'
import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppInfo />
            <div className='search-panel'><SearchPanel /><AppFilter /></div>
            <EmployersList />
            <EmployersAddForm />
        </div>
    )
}
export default App