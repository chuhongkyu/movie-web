import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './routes/Home';
import Enter from "./routes/Enter"
import Detail from "./components/Detail"


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
