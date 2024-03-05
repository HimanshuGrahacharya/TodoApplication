import React from 'react'

import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Adduseer from './Adduseer'
import Edit from './Edit'
const AppRouter = () => {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path='/' element={<App/>} /> 
                <Route path='/create' element={<Adduseer />} />
                <Route path='update/:id' element={ <Edit/>} />
            </Routes>  
        </BrowserRouter>
    
  )
}

export default AppRouter
