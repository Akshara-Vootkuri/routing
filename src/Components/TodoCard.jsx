import "./todo.css"
export const TodoCard=({value})=>{
    const {id,title,completed}=value;
    return(
        <div className={`todo-card ${completed?"completed":"pending"}`}>
            <h3>{id}. {title}</h3>
            <p>
             Status: <strong>{completed ? "Completed" : "Pending"}</strong>
            </p>
        </div>
    )
}