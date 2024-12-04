import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CultureDetail, CultureLocation, Main, NearbyCulture, NearList } from "./pages";
import { TopNav } from './components/TopNav/TopNav';
import { BottomNav } from './components/BottomNav/BottomNav';

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route 
          path='/'
          element = {<Main />}
        />
        <Route 
          path='/near'
          element = {<NearbyCulture />}
        />
        <Route
          path='/culture/detail/:key'
          element = {<CultureDetail />}
        />
        <Route
          path='/culture/map/:key'
          element = {<CultureLocation />}
        />
        <Route 
          path='/culture/nearlist/:key/:id'
          element = {<NearList />}
        />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
