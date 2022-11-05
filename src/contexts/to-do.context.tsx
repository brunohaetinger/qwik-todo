import { component$, createContext, Slot, useContextProvider, useStore, $ } from "@builder.io/qwik";

export const ToDoContext = createContext('To-Do');

export const initialState = ["Clean the house", "Read a book chapter", "Feed my dog"];

export const ToDoStore = component$(() => {
  const state = useStore({
    todos: initialState,
  })
  useContextProvider(ToDoContext, state);
  return (
    <>
      <Slot/>
    </>
  );
});
