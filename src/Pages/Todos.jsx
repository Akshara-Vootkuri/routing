import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import {TodoCard} from "../Components/TodoCard"
export const Todos = () => {
  const { data, page } = useLoaderData();
  const navigate=useNavigate();
   const [loading, setLoading] = useState(false);

   function HandleNext(){
       setLoading(true);
        navigate(`/todos/${page+1}`)
    }
    function HandlePrev(){
       setLoading(true);
        navigate(`/todos/${page-1}`)
    }
     useEffect(() => {
    setLoading(false);
  }, [data]);

  return(
    <>
        <h2>page-{page}</h2>
        {loading && <p>Loading...</p>}
        {!loading&&data.map((todo)=>{
            return(
                <div key={todo.id}>
                    <TodoCard value={todo} />
                </div>
            )
        })}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <button onClick={HandlePrev} disabled={page === 1||loading}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={HandleNext} disabled={data.length < 10||loading}>
          Next
        </button>
      </div>
    </>
  )
};
