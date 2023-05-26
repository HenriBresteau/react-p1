import "./App.css";
import Header from "./components/Header";
import Counter from "./pages/Counter";
import UserList from "./pages/UserList";
import { useState } from "react";
import SimLogin from "./pages/SimLogin";
import { Route, Routes } from "react-router-dom";
import Roles from "./pages/Roles";
import Register from "./pages/RegisterFormix";

function App() {
    const [user, setUser] = useState("");

    return (
        <div className="App">
            <Header user={user} />
            <div className="container p-3">
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route
                        path="/login"
                        element={<SimLogin setUser={setUser} />}
                    />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/roles" element={<Roles />} />
                    <Route
                        path="/register"
                        element={<Register setUser={setUser} />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
