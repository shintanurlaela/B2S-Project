import React from "react";
import { Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login";
import Home from "./Pages/Admin/Home";
import About from "./Pages/Admin/About";
import NotFound from "./Pages/NotFound";
import Book from './Pages/Admin/Book';
import User from "./Pages/Admin/User";
import Register from "./Pages/Register";
import HomeSiswa from "./Pages/Siswa/HomeSiswa";
import AboutSiswa from "./Pages/Siswa/AboutSiswa";
import BookSiswa from "./Pages/Siswa/BookSiswa";

const First = ({ isLoggedIn, setIsLoggedIn, role, setRole }) => {
    if (!isLoggedIn) {
        return <Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />;
    }

    return (
        <Routes>
            {/* Routes for admin */}
            {role === 'admin' && (
                <>
                    <Route path="/book" element={<Book />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/homeadmin" element={<Home />} />
                </>
            )}
            {/* Routes for siswa */}
            {role === 'siswa' && (
                <>
                    <Route path="/homesiswa" element={<HomeSiswa />} />
                    <Route path="/aboutsiswa" element={<AboutSiswa />} />
                    <Route path="/booksiswa" element={<BookSiswa />} />
                </>
            )}
            {/* Route for Register */}
            <Route path="/register" element={<Register />} />

            {/* Not found route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default First;
