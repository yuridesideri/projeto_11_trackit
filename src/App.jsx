import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import History from "./Pages/History.jsx";
import Habits from "./Pages/Habits.jsx";
import Today from "./Pages/Today.jsx";
import Error from "./Pages/Error.jsx"
import UserAuthContext from "./context/userAuthContext.jsx";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);


  return (
    <div className="App"> 
      <UserAuthContext data={userData}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LogIn setUserData={setUserData} />} /> 
              <Route path='history' element={<History />} />
              <Route path='register' element={<Register />} />
              <Route path='habits' element={<Habits />} />
              <Route path='today' element={<Today setUserData={setUserData}/>} />
              <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContext>
    </div>
  )
}



export default App;
