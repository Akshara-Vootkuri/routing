import {NavLink} from "react-router-dom"
import "./style.css"
export const Header=()=>{
    return(
        <>
            <nav>
                <NavLink to="/" 
                    style={({isActive})=>{
                    return{
                        backgroundColor:isActive?"#04AA60":""
                    }
                    }} >
                Home</NavLink>
                <NavLink to="/posts" 
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"#04AA60":""
                        }
                    }}>
                Posts</NavLink>
                <NavLink to="/users" 
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"#04AA60":""
                        }
                    }}>
                Users</NavLink>
                <NavLink to="/todos"
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"#04AA60":""
                        }
                    }} >
                Todos</NavLink>
            </nav>
        </>
    )
}