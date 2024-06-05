import notedIcon from '@/assets/noted-icon.png'
import { NotesIcon } from '@/assets/icons'

function App() {
  return (
    <>
      <aside className='flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
        <a href='/' className='flex items-center gap-2 mx-auto'>
          <img className='w-auto h-6 sm:h-7' src={notedIcon} alt='Noted icon' />
          <h1 className='text-white font-bold text-2xl'>NOTED</h1>
        </a>

        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>
            <a
              className='flex items-center gap-4 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200'
              href='/'
            >
              <NotesIcon />

              <span className='font-medium'>Notes</span>
            </a>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default App
