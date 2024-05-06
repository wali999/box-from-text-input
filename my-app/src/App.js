import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CreateBox from './CreateBox';

function App() {
  
  return (
    <>
      <div>
        <Navbar/>
      </div>

      <div className="App">
         <div className="flexContainer">
           <div>
             <Sidebar/>
           </div>

           <div>
            <CreateBox/>
           </div>

         </div>
      </div>
    </>
  )
}

export default App
