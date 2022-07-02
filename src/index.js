import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyShopping from "./pages/Myshopping";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Navigate to={"home"} replace />} />
            <Route path="/" element={<App />}>
                <Route index path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="edit" element={<Edit />} />
                <Route path="myshopping" element={<MyShopping />} />
            </Route>
            <Route path="*" element={<Navigate to={"home"} replace />} />
        </Routes>
    </BrowserRouter>
);
