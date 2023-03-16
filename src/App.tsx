import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/user/:id"} element={<UserItemPage />} />
          <Route path={"/todos/:id"} element={<UserItemPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
