import { GetAPIPosts } from "./GetAPIPosts"
export const PostLoader=async({params})=>{
  const page=parseInt(params.page||1);
  const data=await GetAPIPosts(page);
  return {data,page}
}