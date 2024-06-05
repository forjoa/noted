import useLocalStorageNotes from '@/utils/useLocalStorage'
import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Note } from '@/utils/types'

export default function Note() {
  const [notes, setNotes] = useLocalStorageNotes()
  const [thisNote, setThisNote] = useState<Note>()
  const { id } = useParams()

  useEffect(() => {
    const note = notes.find((note) => note.id === id)
    if (note) {
      setThisNote(note)
    }
  }, [id, notes])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setThisNote((prevNote) => ({
      ...(prevNote as Note),
      [name]: value,
    }))
  }

  // debouncing to retard notes modification in localstorage
  useEffect(() => {
    let timeoutId: number
    if (thisNote?.id) {
      timeoutId = setTimeout(() => {
        setNotes(thisNote.title, thisNote.content, thisNote.id)
      }, 500)
    }

    return () => clearTimeout(timeoutId)
  }, [thisNote, setNotes])

  return (
    <main className='w-full bg-gray-100 p-8 flex flex-col gap-8'>
      <input
        className='w-full rounded-xl p-4 text-xl font-bold outline-none'
        type='text'
        name='title'
        value={thisNote?.title || ''}
        onChange={handleChange}
      />

      <textarea
        className='flex-1 outline-none rounded-xl p-4'
        name='content'
        value={thisNote?.content || ''}
        onChange={handleChange}
      />
    </main>
  )
}
