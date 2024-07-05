import React from "react";

const AddNewTask = () => {
  return (
    <form>
      <h3 className="font-bold text-lg mb-4">Add New Task</h3>
      <div className="flex flex-col gap-4">
        <input
          className="border rounded p-2 w-full"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <textarea
          className="border rounded p-2 w-full"
          name="description"
          id="description"
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
