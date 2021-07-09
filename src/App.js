import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { TodoList } from "./components/TodoList";
import { API_URL } from "./constants";
import { FilterContext } from "./FilterContext";
import "./styles.css";

export default function App() {
  const [filter, setFilter] = useState({
    isComplete: false
  });

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(
        API_URL + "todo/search?isComplete=" + filter.isComplete
      );
      const data = await res.json();
      setTodoList(data);
    }

    fetchTodos();
    // fetch todos
  }, [filter, setFilter]);

  return (
    <div className="App">
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Filter />
        <TodoList todoList={todoList} />
      </FilterContext.Provider>
    </div>
  );
}
