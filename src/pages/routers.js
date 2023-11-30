import React from 'react'
import styles from "../App.module.css"

import Addtask from "../components/AddTask/AddTask";
import Posts from "../components/Posts/Posts";
import Count from "../components/Count/Count";
import UserList from "../components/UserList/UserList"
import {createBrowserRouter} from "react-router-dom";
import TodoListPage from './TodoListPage/TodoListPage';
import Header from '../components/Header/Header';


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
  ]);
export default router 