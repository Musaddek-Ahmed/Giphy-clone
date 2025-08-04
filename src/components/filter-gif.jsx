import React from 'react'
import { GifState } from '../context/gif.context';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';

const filters = [
  {
    title: "GIFs",
    value: "gifs",
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];

const FilterGif = ({alignLeft = false, showTrending = false}) => {
    const {filter, setFilter} = GifState();
  return (
    <div className={`flex gap-3 ${alignLeft ? '' : 'justify-end'} ${showTrending?"justify-between flex-col sm:flex-row sm:items-center":""} my-3`}>
        
        {showTrending && (

        <span className='flex gap-2'>

        {showTrending && (
            <HiMiniArrowTrendingUp size={25} className='text-teal-400'/>
        )}
        <span className='font-semibold text-gray-400' >Trending</span>
        </span>
        )}

        <div className='relative flex min-w-80 rounded-full bg-gray-800'>
  <div
    className={`absolute top-0 left-0 h-10 w-1/3 rounded-full transition-all duration-300 ${
      filters.find(f => f.value === filter)?.background || 'bg-blue-500'
    }`}
    style={{
      transform: `translateX(${filters.findIndex(f => f.value === filter) * 100}%)`,
    }}
  />
            {filters.map((f) => {
                return <span onClick={()=> setFilter(f.value)} className={`z-20 font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer transition-all duration-300`} key={f.title}>{f.title}</span>
            })}
        </div>
    </div>
  )
}

export default FilterGif

