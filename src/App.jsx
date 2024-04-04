import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sucess } from './pages/Sucess'

export function App(){
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/form-react' element={<Home/>} />
                <Route path='/form-react/sucess' element={<Sucess/>} />
            </Routes>
        </HashRouter>
    )
}