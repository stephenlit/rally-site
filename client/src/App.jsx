import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import  {Home, About, Contact, Services}  from './components/pages/index';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
