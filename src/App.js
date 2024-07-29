import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Navbar } from "./components/Navbar";
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Gaming } from './components/Gaming';
import { Footer } from './components/Footer';
import { Login } from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <Provider store={store}>
      <Router>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/product" element={isLoggedIn ? <Product /> : <Navigate to="/login" />} />
            <Route path="/gaming" element={isLoggedIn ? <Gaming /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
    </>
  );
}

export default App;
