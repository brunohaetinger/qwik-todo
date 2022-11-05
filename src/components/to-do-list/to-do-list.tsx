import { component$, useContext, useWatch$ } from '@builder.io/qwik';
import { ToDoContext } from '~/contexts/to-do.context';

export const ToDoList = component$(() => {
  const todoStore = useContext(ToDoContext)

  return (
    <>
      <h2>{"To Do List"}</h2>
      <ul>
        {todoStore.todos.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
});
