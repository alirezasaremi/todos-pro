import { db } from "@/db";

const Home = async () => {
  const tasks = await db.todo.findMany();

  return (
    <main>
      <ul className="flex flex-col gap-3">
        {tasks.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'line-through text-gray-500' : 'font-semibold'}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
