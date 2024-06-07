import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Provider, useDispatch, useSelector } from 'react-redux'


function App() {
  return (
    <Provider store = {store}>
    <AddTodo/>
    <TodoList/>
  </Provider>
  )
}

export default App
