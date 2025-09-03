async function fetchTodo(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function fetchTodos(ids: number[]) {
  const promises = ids.map((id) => fetchTodo(id));
  const todos = await Promise.all(promises);

  todos.forEach((todo) => {
    console.log("Fetched:", todo);
  });

  return todos;
}
