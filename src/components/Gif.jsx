import React from 'react'
import { Link } from 'react-router-dom'

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
              <input
                type="text"
                readOnly
                value={window.location.href}
                className="w-full px-2 py-1 rounded bg-white text-black"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
              >
                Copy Link
              </button>
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