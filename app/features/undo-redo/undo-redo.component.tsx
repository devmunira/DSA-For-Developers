"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Task {
  id: string;
  completed: boolean;
  text: string;
}

const UnoRedo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>();
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Task Manager with Undo/Redo</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // addTask();
              }
            }}
          />
          <Button onClick={() => {}} className="btn-primary">
            Add Task
          </Button>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => {}}
            disabled={!true}
            className={`px-4 py-2 rounded-lg ${
              true
                ? "bg-amber-50 text-black hover:bg-amber-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            Undo
          </Button>
          <Button
            onClick={() => {}}
            disabled={!true}
            className={`px-4 py-2 rounded-lg ${
              true
                ? "bg-amber-50 text-black hover:bg-amber-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            Redo
          </Button>
        </div>

        <ul className="space-y-2">
          {tasks?.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => () => {}}
                  className="w-5 h-5 rounded"
                />
                <span
                  className={`${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}>
                  {task.text}
                </span>
              </div>
              <Button
                onClick={() => () => {}}
                className="text-black hover:bg-amber-100 bg-amber-50">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UnoRedo;
