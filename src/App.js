import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import NotFoundPage from './pages/NotFoundPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Dashboard from './pages/user/Dashboard';
import UserRoute from './routes/UserRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<UserRoute />} >
          <Route path='' element={<Dashboard />} />
          {/* <Route path='/buy' element={} /> */}
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
