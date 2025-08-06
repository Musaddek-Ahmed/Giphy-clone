import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const FollowOn = () => {
  return (
    <div className='faded-text pt-2'>
        <span>Follow on:</span>
        <div className='flex gap-4 pt-3'>
            <a href="/">
                <FaYoutube size={20} className='hover:text-red-500'/>
            </a>
            <a href="/">
                <FaInstagram size={20} className='hover:text-pink-500'/>
            </a>
            <a href="/">
                <FaTwitter size={20} className='hover:text-blue-500'/>
            </a>
        </div>
    </div>
  )
}

export default FollowOn