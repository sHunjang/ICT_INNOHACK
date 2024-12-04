import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main } from "./pages";
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
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
