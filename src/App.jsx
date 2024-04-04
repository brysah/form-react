import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sucess } from './pages/Sucess'

export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sucess' element={<Sucess/>} />
            </Routes>
        </BrowserRouter>
    )
}