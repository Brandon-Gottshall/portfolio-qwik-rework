import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';

export default component$(() => {
  
  // QWIK state for menu toggle
  const state = useStore({ 
    menuOpen: false 
  });


  return (
    <header>
      <div className="mb-4 mt-8 flex justify-between items-center px-4">
        <a href="https://brandongottshall.com/"  target="_blank" className='h-full'>
          <h1 className="text-xs font-semibold text-red-600">
            Brandon Gottshall
          </h1>
        </a>
        <div className='w-10 -mb-2'>
              <button onClick$={() => state.menuOpen = true}className='flex-col w-10 h-full space-y-2'>
                <div className={`w-10 h-1 bg-black transform-gpu rotate-0 duration-1000 ${state.menuOpen ? 'rotate-45' : ''}`} />
                <div className={`w-10 h-1 bg-black transform-gpu rotate-0 duration-1000 ${state.menuOpen ? '-translate-y-3 -rotate-45' : ''}`} />
                <div className={`w-10 h-1 bg-black transition-opacity duration-500 opacity-100 ${state.menuOpen ? 'opacity-0' : ''}`} />
              </button>
            </div>
      </div>
    </header>
  );
});
