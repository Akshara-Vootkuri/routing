import axios from "axios"
export const GetAPIPosts=async(page = 1, limit = 10)=>{
    try{
        const response= await axios.get("https://jsonplaceholder.typicode.com/posts",{
        params: { _page: page, _limit: limit },
     })
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}