import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './view/Home/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/HW1' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
