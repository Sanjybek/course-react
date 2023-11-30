import React from 'react'


import {createBrowserRouter} from "react-router-dom";

import TodoListPage from './TodoListPage/TodoListPage';
import Header from '../components/Header/Header';

import PostsPage from './PostPage';




const router = createBrowserRouter([
    {
      path: "/",

      element: (
        <>
          <Header/>
          <div>Header</div>
        </>
      )
  
    },
    {
      path: "/todo-list",
      element: (
        <>
          <Header/>
          <TodoListPage/>
          {/* <TodoList/> */}
        </>
      )
      
    },
    {
      path: "/user-list",
      element: (
        <>
          <Header/>
          <UserList/>,
        </>
      )
    },
    {
      path: "/add-task",
      element: (
        <>
          <Header/>
          <Addtask/>
        </>
      )
    },
    {
      path: "/count",
      element: (
        <>
          <Header/>
          <Count/>
        </>
      )
    },
    {
      path: "/posts",
      element: (
        <>
          <Header/>
          <Posts/>
        </>
      )
    },

      element: <PostsPage/>
    }

  ]);
export default router 