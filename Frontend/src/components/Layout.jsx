import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    )
}