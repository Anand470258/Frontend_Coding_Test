import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import {BrowserRouter} from 'react-router-dom';

  
function App() {  
  return (
    <BrowserRouter>
    <div className="App">
       
      <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-yellow-100 bg-indigo-300 font-bold p-4'>
      Contact Management App
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
        <AllRoutes />
        </div>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
