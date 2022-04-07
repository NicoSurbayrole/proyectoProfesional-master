import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";

import { Route, Routes,useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";

import Error from "./component/Error";
import Admin from "./component/Admin";
import Agregar from "./component/Agregar";
import Editar from "./component/Editar";
import Eliminar from "./component/Eliminar";
import CrearCategoria from "./component/CrearCategorias";
import AddAdmins from "./component/AddAdmins";
import DeleteAdmins from "./component/DeleteAdmins";
import Grid from "./component/Grid"
import Categories from "./component/Categories";
import Simple from "./component/Simple";

const App = () => {
    const dispatch = useDispatch()
    const userRol = useSelector((state) => state.user.rol);
    const { state } = useLocation();

    useEffect(() => {
        axios.get("/wasLogged").then((userLoged) => {
            dispatch(setUser(userLoged.data));
        });
    });

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<Simple />} />
                <Route path="/categories/:id" element={<Categories />} />
                <Route path="/search" element={<Grid products={state} />} />
                {userRol?.includes("admin") && (
                    <>
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/admin/agregar" element={<Agregar />} />
                        <Route path="/admin/editar" element={<Editar />} />
                        <Route path="/admin/eliminar" element={<Eliminar />} />
                        <Route path="/admin/crearcategoria" element={<CrearCategoria />} />
                        {userRol === "superadmin" && (
                            <>
                                <Route path="/admin/agregaradmin" element={<AddAdmins />} />
                                <Route path="/admin/deleteadmin" element={<DeleteAdmins />} />
                            </>
                        )}
                    </>
                )}
                <Route path="404" element={<Error />} />
            </Routes>
            <footer>
                    
            </footer>
        </div>
    )
}

export default App;