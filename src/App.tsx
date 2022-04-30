import React, { Suspense } from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import './styles/App.scss';

/* components */
const Home = React.lazy(() => import('./components/Home'));
const MyLibrary = React.lazy(() => import('./components/MyLibrary'));
const Navbar = React.lazy(() => import('./components/Navbar'));

const App = () => {

  const handleComponent = (Component: React.ReactNode) => {
    return <div><Navbar/>{Component}</div>
  }

  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        <Routes>
          <Route path="/" element={handleComponent(<Home/>)} />
          <Route path="/library" element={handleComponent(<MyLibrary/>)} />
        </Routes>
      </Switch>
    </Suspense>



  )
}
export default App;
