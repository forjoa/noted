import notedIcon from '@/assets/noted-icon.png'
import { AddNoteIcon, NotesIcon } from '@/assets/icons'
import useLocalStorageNotes from '@/utils/useLocalStorage'
import { Link } from 'react-router-dom'

export default function Aside() {
  const [notes, addNote] = useLocalStorageNotes()

  return (
    <aside className='flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
      <a href='/' className='flex items-center gap-2 mx-auto'>
        <img className='w-auto h-6 sm:h-7' src={notedIcon} alt='Noted icon' />
        <h1 className='text-white font-bold text-2xl'>NOTED</h1>
      </a>

      <div className='flex flex-col justify-between mt-6'>
        <nav>
          <p className='flex items-center justify-between px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200'>
            <NotesIcon />
            <span className='font-medium'>Notes</span>
            <button onClick={() => addNote('New note', '')}>
              <AddNoteIcon />
            </button>
          </p>
        </nav>
      </div>

      <div className='text-white'>
        {notes.map((note, index) => (
          <div key={index} className='flex justify-center items-center py-4 px-2 dark:bg-gray-950 rounded-b-lg'>
            <Link to={`/${note.id}`} className='hover:underline'>{note.title}</Link>
          </div>
        ))}
      </div>
    </aside>
  )
}
