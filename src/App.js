import './App.css';
import Sidebar from './components/Sidebar';
import SiteManageMent from './components/sitemangement/site';


function App() {
  return (
    <div className="App">
     <Sidebar/>
     <div className='main-content'>
      <SiteManageMent/>
     </div>
     
    </div>
  );
}

export default App;
