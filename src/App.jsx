
import { useState } from "react";
import styles from "./App.module.css"

import Addtask from "./components/AddTask/AddTask";
import List from "./components/List/List"
import UserList from "./components/UserList/UserList"
import TodoList from "./components/TodoList/TodoList";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Header</div>,

  },
  {
    path: "/todo-list",
    element: <TodoList/>,
    
  },
  {
    path: "/user-list",
    element: <UserList/>,
  },
]);

function App() {
  return <RouterProvider router={router} />
     
          {/* <UserList/> */}
          {/* <h1 className={'list'}>TODO LIST</h1>
          <button onClick={handleCount}>click</button>
          <Addtask></Addtask>
          <List
          count = {count}
          str={str}
          arr={arr}
          numer={numer}
          /> */}
          // <TodoList/>
        
  

}

export default App;
