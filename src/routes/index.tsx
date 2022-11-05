import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { ToDoList } from '~/components/to-do-list/to-do-list';

export default component$(() => {
  return (
    <div>
      <h1>
        Qwik To Do <span class="lightning">✏️</span>
      </h1>

      <ToDoList/>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
