import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Gif = ({gif, hover=true, overlayMode = null}) => {
  return (
    <Link to={`/${gif.type}s/${gif.slug}`}>

    <div className='w-full mb-2 relative cursor-pointer group aspect-video'>
        <img src={gif?.images?.fixed_width.webp} alt={gif?.title} className='w-full object-cover rounded transition-all duration-300' />

      {/* Hover overlay */}
      {hover && !overlayMode && (
        <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2">
          <img src={gif?.user?.avatar_url} alt={gif?.user?.display_name} className="h-8 rounded-full" />
          <span>{gif?.user?.display_name}</span>
        </div>
      )}

      {/* Share/Embed Overlay */}
      {overlayMode && (
        <div className="absolute inset-0 bg-black/70 rounded flex flex-col items-center justify-center gap-4 p-4 text-white">
{overlayMode === "share" && (
  <>
    <h3 className="font-bold text-lg">Share this GIF</h3>

    {/* Link input */}
    <input
      type="text"
      readOnly
      value={window.location.href}
      className="w-full px-2 py-1 rounded bg-white text-black"
    />

    {/* Copy link button */}
    <button
      onClick={() => navigator.clipboard.writeText(window.location.href)}
      className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700 mt-2"
    >
      Copy Link
    </button>

    {/* Social Share Buttons */}
    <div className="flex gap-3 mt-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full hover:bg-green-600 flex items-center justify-center"
        title="Share on WhatsApp"
      >
        <FaWhatsapp size={22} color="white" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 flex items-center justify-center"
        title="Share on Facebook"
      >
        <FaFacebookF size={20} color="white" />
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this GIF!")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-3 rounded-full hover:bg-gray-800 flex items-center justify-center"
        title="Share on X"
      >
        <FaXTwitter size={20} color="white" />
      </a>

      {/* Instagram - copies link */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("GIF link copied! Paste it into Instagram.");
        }}
        className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 flex items-center justify-center"
        title="Copy link for Instagram"
      >
        <FaInstagram size={22} color="white" />
      </button>
    </div>
  </>
)}


          {overlayMode === "embed" && (
            <>
              <h3 className="font-bold text-lg">Embed this GIF</h3>
              <textarea
                readOnly
                value={`<iframe src="${gif.embed_url}" width="480" height="270" frameBorder="0" allowFullScreen></iframe>`}
                className="w-full px-2 py-1 rounded bg-white text-black"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<iframe src="${gif.embed_url}" width="480" height="270" frameBorder="0" allowFullScreen></iframe>`
                  );
                }}
                className="px-3 py-1 bg-pink-500 rounded hover:bg-pink-600"
              >
                Copy Embed Code
              </button>
            </>
          )}
        </div>
      )}
    </div>
    </Link>
  )
}

export default Gif