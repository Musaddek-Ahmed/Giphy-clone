import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-context'
import FilterGif from '../components/filter-gif'
import Gif from '../components/Gif'



const Search = () => {
  const [searchResults, setSearchResults] = useState([])
  const {gf, filter} = GifState()
  const {query} = useParams()

  const fetchSearchResults = async() => {
    const {data} = await gf.search(query, {
      limit: 20,
      sort: 'relevant',
      type:filter,
      lang: 'en'
    });
    setSearchResults(data);
    
  }

  useEffect(() => {
    fetchSearchResults();
  }, [filter, query])
  

      
  return (
    <div className='my-4'>
      <h2 className='text-5xl pb-3 font-extrabold capitalize'>{query}</h2>

      <FilterGif alignLeft={true}/>

      {searchResults.length > 0 ? (
        <div className='columns-2 md:columns-3 lg:columns-4 gap-2'>
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id}/>
          ))}
        </div>
      ): (
        <span>
          {""}
          No GIFs found for <span className='font-bold'>{query}</span>. 
        </span>
      )}
    </div>
  )
}

export default Search