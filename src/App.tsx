import React, { Suspense } from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import './styles/App.scss';

/* components */
const Home = React.lazy(() => import('./components/Home'));
const MyLibrary = React.lazy(() => import('./components/MyLibrary'));

const App = () => {

  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<MyLibrary />} />
        </Routes>
      </Switch>
    </Suspense>



  )
}
export default App;
