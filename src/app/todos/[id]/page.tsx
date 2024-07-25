import Example from "@/app/components/Example";
import { notFound } from "next/navigation";

async function getTodo(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
}

export default async function TODO({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);

  if (todo.title == null) return notFound();

  return (
    <h1>
      To do {todo.title} <Example />
    </h1>
  );
}
