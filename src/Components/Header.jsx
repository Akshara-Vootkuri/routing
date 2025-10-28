import {NavLink} from "react-router-dom"
import "./style.css"
export const Header=()=>{
    return(
        <>
            <nav>
                <NavLink to="/" 
                    style={({isActive})=>{
                    return{
                        backgroundColor:isActive?"#0077cc":""
                    }
                    }} >
                Home</NavLink>
                <NavLink to="/posts" 
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"#0077cc":""
                        }
                    }}>
                Posts</NavLink>
                <NavLink to="/users" 
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"#0077cc":""
                        }
                    }}>
                Users</NavLink>
                <NavLink to="/todos"
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"#0077cc":""
                        }
                    }} >
                Todos</NavLink>
            </nav>
        </>
    )
}