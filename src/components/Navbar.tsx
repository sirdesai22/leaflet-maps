import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full flex justify-between items-center p-3 bg-blue-400'>
        <h1 className='font-bold text-3xl text-white'>Heat-Map</h1>
        <div className='flex gap-3'>
            <button className='bg-white px-3 py-2 rounded-lg font-semibold shadow-md'>Cafe☕</button>
            <button className='bg-white px-3 py-2 rounded-lg font-semibold shadow-md'>Tourist🧳</button>
            <button className='bg-white px-3 py-2 rounded-lg font-semibold shadow-md'>Fun🤡</button>
            <button className='bg-white px-3 py-2 rounded-lg font-semibold shadow-md'>Party🍺</button>
            <button className='bg-green-500 text-white px-3 py-2 rounded-lg font-semibold shadow-md'>Add Pin📍</button>
        </div>
    </div>
  )
}

export default Navbar