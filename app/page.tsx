import React, { Suspense } from "react";
import "../styles/globals.css";
import TodosList from "./(user)/todos/TodosList";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading the todos....</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          {/*@ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <p className="text-green-500">Loading the shopping trolley..</p>
        }
      >
        <div className="flex space-x-2">
          {/*@ts-ignore */}
          <h1>Loading Shopping Trolley</h1>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
