import notedIcon from '@/assets/noted-icon.png'

export default function Home() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <h2 className='flex gap-2'>
        This is Noted <img src={notedIcon} alt='Noted icon' className='w-6'/> your next
        favorite note aplication
      </h2>
    </div>
  )
}
