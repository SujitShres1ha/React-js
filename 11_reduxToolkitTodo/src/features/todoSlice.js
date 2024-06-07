import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {id: nanoid(), text: action.payload}
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleCompleted: (state,action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  }
})

export const {addTodo, removeTodo, toggleCompleted} = todoSlice.actions
export default todoSlice.reducer