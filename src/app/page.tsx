import Link from "next/link";
import { todo } from "node:test";

async function getTodos() {
  await wait(2000);
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
}

export default async function Home() {
  // await keyword say wait on this line till promise resolve
  const todos = await getTodos();

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`todos/4${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
