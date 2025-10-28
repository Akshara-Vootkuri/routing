import {NavLink} from "react-router-dom"
import "./style.css"
export const Header=()=>{
    return(
        <>
            <nav>
                <NavLink to="/" className={({ isActive })=>(isActive?"active":"")}>Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/todos">Todos</NavLink>
            </nav>
        </>
    )
}