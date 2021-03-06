import './App.css';
import Home from './page/home/Home';
import Resume from './page/resume/Resume';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import "./css/main.css"
import Navbar from './component/navbar/Navbar';
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
