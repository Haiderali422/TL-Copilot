import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login.tsx";
import Signup from "./Pages/Auth/SignUp.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
