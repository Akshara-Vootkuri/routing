export const GetAPITodos = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    return data;
  }
   catch (error) {
    console.error("Error fetching todos:", error);
    return []; 
  }
};
