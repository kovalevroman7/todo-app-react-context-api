import React from "react";

export const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
