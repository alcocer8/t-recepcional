import { Outlet } from "react-router-dom"
import { ComplexNavbar } from "../componets/ComplexNavbar"

function MainLayout() {
  return (
    <div>
        <ComplexNavbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout