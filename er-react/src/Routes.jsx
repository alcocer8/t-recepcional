import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Profesores from "./pages/profesores/Profesores";
import Egresados from "./pages/egresados/Egresados";
import Estadisticas from "./pages/Estadisticas";
import {AddProfesores} from "./pages/profesores/AddProfesores";
import Login from "./pages/auth/Login";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/profesores",
        element: <Profesores />,
      },
      {
        path: "/profesores/add",
        element: <AddProfesores/>
      },
      {
        path: "/egresados",
        element: <Egresados />,
      },
      {
        path: "/estadisticas",
        element: <Estadisticas />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login/>,
      },
    ],
  },
]);

export default Routes;
