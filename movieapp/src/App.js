
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Error from './Error';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
       
        <Route exact path="movie/:id" element={<SingleMovie />} />
       
        {/* <Route exact path="*" element={<Error />} /> */}
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
