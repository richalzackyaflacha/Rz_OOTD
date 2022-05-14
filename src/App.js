import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

// Add UI page
import Navbar from './components/navbar';
import Home from './container/Home/home';
import About from './container/About/about';
import Style from './container/Style/style';
import Galery from './container/Galery/galery';
import ErrorPage from './container/Error/error';
import Footer from './components/footer';

function App() {
    
    // Dark mode
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className="app" data-theme={theme}>
            <Router>
                <Navbar setSwitchTheme={switchTheme} theme={theme} />
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tentang' element={<About />} />
                    <Route path='/style' element={<Style />} />
                    <Route path='/galeri' element={<Galery />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    )
}

export default App;
