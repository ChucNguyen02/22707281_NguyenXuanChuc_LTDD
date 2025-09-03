
export async function fetchCompletedTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const todos: { id: number; title: string; completed: boolean }[] = await response.json();

  const completed = todos.filter((todo) => todo.completed);

  return completed;
}
