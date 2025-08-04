

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Category from './pages/category'
import Favourite from './pages/favourite'
import Home from './pages/home'
import Search from './pages/search'
import SingleGif from './pages/single-gif'
import GifProvider from './context/gif.context'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,

    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/:category',
        element: <Category/>
      },
      {
        path: '/search/:query',
        element: <Search/>
      },
      {
        path: '/:type/:slug',
        element: <SingleGif/>
      },
      {
        path: '/favourite',
        element: <Favourite/>
      },
    ]
  }
])
function App() {

  return (
    <GifProvider>

      <RouterProvider router={router}/>
    </GifProvider>
   
  )
}

export default App
