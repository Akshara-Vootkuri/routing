import "./Home.css"
export const Home=()=>{
    return(
        <>
            <div className="container">
                <h2>Welcome to jsonplaceholder API explorer</h2>
                <p>
                This React app demonstrates client-side routing and data fetching using 
                <strong> React Router </strong> and the <strong>JSONPlaceholder API</strong>.
                </p>
                <p>
                Use the navigation bar above to view <b>Posts</b>, <b>Users</b>, or <b>Todos</b>.
                </p>
            </div>
        </>
    )
}