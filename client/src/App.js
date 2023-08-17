import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AuthProvider from "./utils/authContext";
import './index.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
