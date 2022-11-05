import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { ToDoInput } from '~/components/to-do-input/to-do-input';
import { ToDoList } from '~/components/to-do-list/to-do-list';
import { ToDoStore } from '~/contexts/to-do.context';

export default component$(() => {
  return (
    <div>
      <h1>
        Qwik To Do <span class="lightning">✏️</span>
      </h1>

      <ToDoStore>
        <ToDoInput/>
        <ToDoList/>
      </ToDoStore>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
