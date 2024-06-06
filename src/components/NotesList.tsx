import { Note } from '@/utils/types'
import { Link } from 'react-router-dom'

export default function NotesList({ notes }: { notes: Note[] }) {
  return (
    <div className='text-white mt-4 flex flex-col gap-4'>
      {notes.map((note, index) => (
        <div
          key={index}
          className='flex justify-center items-center py-4 px-2 dark:bg-gray-950 rounded-lg text-balance text-center'
        >
          <Link
            to={`/${note.id}`}
            className='hover:underline text-balance text-center'
          >
            {note.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
