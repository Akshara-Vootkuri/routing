import { useLoaderData, useNavigate } from "react-router-dom";
import {TodoCard} from "../Components/TodoCard"
export const Todos = () => {
  const { data, page } = useLoaderData();
  const navigate=useNavigate();
   function HandleNext(){
        navigate(`/todos/${page+1}`)
    }
    function HandlePrev(){
        navigate(`/todos/${page-1}`)
    }
  return(
    <>
        <h2>page-{page}</h2>
        {data.map((todo)=>{
            return(
                <div key={todo.id}>
                    <TodoCard value={todo} />
                </div>
            )
        })}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <button onClick={HandlePrev} disabled={page === 1}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={HandleNext} disabled={data.length < 10}>
          Next
        </button>
      </div>
    </>
  )
};
