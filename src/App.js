import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import About from './components/about';
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
      <Routes>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}
        ></Route>
        <Route path="/" exact element={<Dashboard />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;