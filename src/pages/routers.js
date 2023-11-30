import React from 'react'


import {createBrowserRouter} from "react-router-dom";
import PostsPage from './PostPage';



const router = createBrowserRouter([
    {
      path: "/",
      element: <PostsPage/>
    }
  ]);
export default router 