import React, { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id : 1,
      todo : "msg",
      completed : false
    }
  ],
  deleteTodo : () => {},
  updateTodo : () => {},
  addTodo : () => {},
  toggleComplete : () => {}
})

export const ContextProvider = TodoContext.Provider

export const useTodo = () => useContext(TodoContext)