import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const add = (e) => {
    e.preventDefault()
    if (input.trim().length > 0){
      dispatch((addTodo(input)))
    }
    setInput("")
  }
  return (
    <form onSubmit = {add} className="flex mt-11 px-20">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={input}
              onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white ">
              Add
          </button>
      </form>
    )
}

export default AddTodo;
