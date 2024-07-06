import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

const AddNewTask = () => {
  const addTask = async (formData: FormData) => {
    "use server";

    // get and validate user inputs
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title || title.trimEnd().length === 0) {
      return new Response("Title is required", {
        status: 400,
      });
    }

    // add task to db
    const task = await db.todo.create({
      data: {
        title,
        description,
        completed: false,
        color: "#fff",
      },
    });

    // redirect
    redirect("/");
  };

  return (
    <form action={addTask}>
      <h3 className="font-bold text-lg mb-4">Add New Task</h3>
      <div className="flex flex-col gap-4">
        <input
          className="border rounded p-2 w-full"
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          className="border rounded p-2 w-full"
          name="description"
          placeholder="Description"
        />

        <button type="submit" className="bg-sky-500 text-white rounded p-2">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddNewTask;
