export const GetAPIUsers=async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}