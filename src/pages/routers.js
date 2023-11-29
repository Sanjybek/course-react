import React from 'react'
import styles from "../App.module.css"

import Addtask from "../components/AddTask/AddTask";
// import List from "../components/List/List"
import UserList from "../components/UserList/UserList"
import TodoList from "../components/TodoList/TodoList";
import Posts from "../components/Posts/Posts";
import Count from "../components/Count/Count";
import {createBrowserRouter} from "react-router-dom";
import TodoLIstPage from './TodoListPage/TodoLIstPage';
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
          <TodoLIstPage/>
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