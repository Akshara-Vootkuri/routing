import { useLoaderData } from "react-router-dom"
import { UserCard } from "../Components/UserCard";

export const Users=()=>{
    const userData=useLoaderData();
    return(
        <>
            {console.log(userData)}
            {!userData&&<p>Loading...</p>}
            {userData&& 
                userData.map((user)=>{
                    return <UserCard key={user.id} value={user}/>
                })
            }

        </>
    )
}