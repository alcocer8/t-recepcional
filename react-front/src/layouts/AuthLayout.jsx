import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet/>
    </div>
  )
}

export default AuthLayout