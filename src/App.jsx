import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import History from "./Pages/History.jsx";
import Habits from "./Pages/Habits.jsx";
import Today from "./Pages/Today.jsx";
import Error from "./Pages/Error.jsx"

function App() {

  
  return (
    <div className="App">  
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn />} /> 
            <Route path='history' element={<History />} />
            <Route path='register' element={<Register />} />
            <Route path='habits' element={<Habits />} />
            <Route path='today' element={<Today />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
