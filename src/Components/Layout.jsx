import { Footer } from "./Footer"
import { Header } from "./Header"
import { Home } from "../Pages/Home"
import { Outlet } from "react-router-dom"
export const Layout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}