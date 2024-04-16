import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
    Home,
    About,
    Contact,
    Services,
} from './components/pages/index';
import Layout from './components/pages/Layout';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/about'
                            element={<About />}
                        />
                        <Route
                            path='/services'
                            element={<Services />}
                        />
                        <Route
                            path='/contact'
                            element={<Contact />}
                        />
                        <Route path='/' element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
