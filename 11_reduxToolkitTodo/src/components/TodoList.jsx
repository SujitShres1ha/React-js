import React, { useState } from "react";
import { removeTodo, toggleCompleted } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";


function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [text, setText] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false)
  return (
    
      <div className="flex border w-full border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black">
        <input type="checkbox" 
          className="cursor-pointer" 
          checked = {todo.completed}
          disabled = {isEditable}
          onChange = {()=>dispatch(toggleCompleted(todo.id))}
        />
        <input type="text" 
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`} 
          value={text} 
          readOnly={!isEditable}
          onChange = {(e) => setText(e.target.value)}
        />
        <button 
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={()=>{
            if (isEditable && text.trim().length > 0){
              setIsEditable(false)
            }else{
              setIsEditable(true)
            }
          }}
          disabled = {todo.completed}
        >
          {isEditable ? "📁" : "✏️" }
        </button>
        <button   
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          ❌
        </button>
      </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos)
  return (
    <div className="px-20 flex flex-wrap mt-4 gap-y-3">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
        <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
