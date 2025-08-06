import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const contentType = ["gifs", "stickers", "texts"]

const SingleGif = () => {
  const {type, slug} = useParams()
  const [gif, setGif] = useState({})

  useEffect(()=> {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type")
    }
  }, [])

  return (
    <div>SingleGif</div>
  )
}

export default SingleGif