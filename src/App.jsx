import React from 'react'
// import styles from "./App.module.css"
import  router  from "./pages/routers";
// import Addtask from "./components/AddTask/AddTask";
// import List from "./components/List/List"
// import UserList from "./components/UserList/UserList"
// import TodoList from "./components/TodoList/TodoList";

import {
  RouterProvider
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Header</div>,

//   },
//   {
//     path: "/todo-list",
//     element: <TodoList/>,
    
//   },
//   {
//     path: "/user-list",
//     element: <UserList/>,
//   },
//   {
//     path: "/add-task",
//     element: <Addtask/>,
//   },
// ]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
