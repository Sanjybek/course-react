import React from 'react'
// import styles from "./App.module.css"
import  router  from "./pages/routers";
// import Addtask from "./components/AddTask/AddTask";
// import List from "./components/List/List"
// import UserList from "./components/UserList/UserList"
// import TodoList from "./components/TodoList/TodoList";

import { useState } from "react";
import styles from "./App.module.css"

// import Addtask from "./components/AddTask/AddTask";
// import List from "./components/List/List";
import Posts from "./components/Posts/Posts";
import Count from "./components/Count/Count";

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

  // const [count, setCount] = useState(1)
  // // console.log(count);
  // const handleCount = () => {
  //   setCount(2)
  // }
  // // const arr = ['item1','item2','item3']
  // // const [a, b] = arr
  // // console.log(a,b, 'кортедж');


  // // const count = 1
  // const str = 'l9'
  // const arr = ['item1','item2','item3']
  // const numer = 123456


  

  
  // return (
  //     <>
  //       {/* <h1 className={'list'}>TODO LIST</h1>
  //       <h1 className={'list'}>TODO LIST</h1>
  //       <Count/>
  //       <button onClick={handleCount}>click</button>
  //       <Addtask></Addtask>
  //       <List
  //       count = {count}
  //       str={str}
  //       arr={arr}
  //       numer={numer}
  //       /> */}
  //       <Posts/>
  //       />
  //         {/* <UserList/> */}
  //         {/* <h1 className={'list'}>TODO LIST</h1>
  //         <button onClick={handleCount}>click</button>
  //         <Addtask></Addtask>
  //         <List
  //         count = {count}
  //         str={str}
  //         arr={arr}
  //         numer={numer}
  //         /> */}
  //         <TodoList/>

          

        
      // </>
  // )

}

export default App;
