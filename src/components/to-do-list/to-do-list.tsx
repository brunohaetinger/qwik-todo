import { component$ } from '@builder.io/qwik';

export const ToDoList = component$(() => {
  const toDos = ["abc", "def", "ghi"]
  return (
    <>
      <h2>{"To Do List"}</h2>
      <ul>
        {toDos.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
});
