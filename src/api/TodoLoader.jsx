import { GetAPITodos } from "./GetAPITodos";

export const TodoLoader = async ({ params }) => {
  const page = parseInt(params.page || 1);
  const data =await GetAPITodos(page);
  return { data, page };
};
