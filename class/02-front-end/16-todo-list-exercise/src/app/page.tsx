"use client";

import Image from "next/image";
import { useState } from "react";

const initialTodoList = [
  { id: 1, done: false, task: "Take a bath" },
  { id: 2, done: true, task: "Finish friday project" },
  { id: 3, done: false, task: "Watching When Lifes Gives You Tangerines" },
  { id: 4, done: false, task: "Eat banana" },
  { id: 5, done: true, task: "Learn code" },
];

export default function HomePage() {
  const [allList, setAllList] = useState(initialTodoList);
  const [completedList, setCompletedList] = useState(
    initialTodoList.filter((todo) => todo.done !== false)
  );
  const [activeList, setActiveList] = useState(
    initialTodoList.filter((todo) => todo.done !== true)
  );
  const [viewMode, setViewMode] = useState<"all" | "active" | "done">("all");

  function getViewMode() {
    if (viewMode === "all") {
      return allList;
    } else if (viewMode === "active") {
      return activeList;
    } else {
      return completedList;
    }
  }

  return (
    <main>
      <div className="bg-purple-400 h-[300px] w-full relative">
        <Image src="/background.svg" alt="Background image" fill />
      </div>

      <div className="w-fit absolute top-[70px] right-0 left-0 m-auto">
        <h1 className="text-white text-[40px] font-bold tracking-[15px] mb-[40px]">
          TODO
        </h1>
        <form className="bg-white flex gap-[24px] rounded-[5px] w-[540px] py-[20px] px-[24px]">
          <div className="rounded-full border border-[#E3E4F1] h-[24px] w-[24px]"></div>
          <input
            type="text"
            placeholder="Create a new todo"
            className="w-full outline-none"
          />
        </form>
        <div className="w-[540px] bg-white rounded-[5px] h-fit mt-[24px] shadow-[0px_4px_4px_rgba(0,0,0,0.25),0px_4px_70px_rgba(0,0,0,0.1)]">
          <ul>
            {/* <li>
            <input type="radio" />
            <span>Take a bath</span>
          </li>
          <li>
            <input type="radio" />
            <span>Finish Friday project</span>
          </li> */}
            {getViewMode().map((todo, index) => {
              return (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => {
                      const newTodoList = [...todoList];
                      newTodoList[index].done = !newTodoList[index].done;
                      console.log(newTodoList[index]);
                      setTodoList(newTodoList);
                    }}
                  />
                  <span
                    className={`${
                      todo.done ? "line-through text-gray-300" : "text-black"
                    } text-2xl font-bold`}
                  >
                    {todo.task}
                  </span>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              const falseTodoList = todoList.filter((todo) => {
                if (todo.done === true) {
                  return false;
                } else {
                  return true;
                }
              });

              setTodoList(falseTodoList);
            }}
          >
            Clear Completed
          </button>
          <button onClick={() => setViewMode("all")}>All</button>
          <button onClick={() => setViewMode("done")}>Completed</button>
          <button onClick={() => setViewMode("active")}>Active</button>
        </div>
      </div>
    </main>
  );
}
