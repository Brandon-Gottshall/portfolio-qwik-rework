import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen text-9x">
        <h1 className="text-red-600">Hello World!</h1>
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
