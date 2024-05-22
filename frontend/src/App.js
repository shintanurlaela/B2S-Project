import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import First from "./First";
import NavbarAdmin from "./Pages/Admin/NavbarAdmin";
import NavbarSiswa from "./Pages/Siswa/NavbarSiswa";
import Register from "./Pages/Register"; // Import halaman Register

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const location = useLocation();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole('');
        localStorage.removeItem('role');
    };

    // Function to check if the current route is for registration
    const isRegisterRoute = () => {
        return location.pathname === "/register";
    };

    return (
        <div>
            {/* Render navbar only if the current route is not for registration and user is logged in */}
            {!isRegisterRoute() && isLoggedIn && role === 'admin' && <NavbarAdmin onLogout={handleLogout} />}
            {!isRegisterRoute() && isLoggedIn && role === 'siswa' && <NavbarSiswa onLogout={handleLogout} />}
            {/* Render halaman Register */}
            {isRegisterRoute() && <Register />}
            {/* Render First jika bukan halaman register dan pengguna sudah login */}
            {!isRegisterRoute() && <First isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role} setRole={setRole} />}
        </div>
    );
};

export default App;
