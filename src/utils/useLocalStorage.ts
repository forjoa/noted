import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { Note } from '@/utils/types'

const getStoredNotes = () => {
  const storedNotes = localStorage.getItem('notes')
  return storedNotes ? JSON.parse(storedNotes) : []
}

const useLocalStorageNotes = () => {
  const [notes, setNotes] = useState<Note[]>(getStoredNotes())

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (title: string, content: string, id?: string) => {
    const timestamp = new Date().toISOString()
    if (id) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id
            ? ({ ...note, title, content, timestamp } as unknown as Note)
            : note
        )
      )
    } else {
      const newNote: Note = {
        id: uuidv4(),
        title,
        content,
        timestamp: new Date(timestamp),
      }
      setNotes((prevNotes) => [...prevNotes, newNote])
    }
  }
  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  return [notes, addNote, deleteNote] as const
}

export default useLocalStorageNotes
