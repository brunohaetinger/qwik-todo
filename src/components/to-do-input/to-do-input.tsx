import { component$, useContext, useStore, $ } from "@builder.io/qwik";
import { ToDoContext } from "~/contexts/to-do.context";

export const ToDoInput = component$(() => {
  const state = useStore({
    newTitle: "",
  })
  const todoStore = useContext(ToDoContext)

  const addToDo = $((newTitle: string)=>{
    if(newTitle){
      todoStore.todos = [...todoStore.todos, newTitle];
    }
  })

  return (
    <>
      <label>New To Do title:</label>
      <input value={state.newTitle} onInput$={(event)=>{state.newTitle = event.target.value}}/>
      <button onClick$={()=> addToDo(state.newTitle)}>Add</button>
    </>
  );
});
