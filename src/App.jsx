
import { useState } from 'react';
import './App.css';
import Input from './components/AddTask/AddTask';
import List from './components/List/List';

function App() {
  // const text = 'hello world'
  // console.log(text);
  // const createElement = () => {
  //   return <h1>React APP</h1>

  // }

  const arr = [1,2,3]

  const [a,b] = arr
  console.log(a,b );
  const count = 1
  const str = 'dcfkn'
  // const arr = [1,2,3]
  const number = 123
  return (
    <>
      {/* <div className="box">div</div>
      {createElement()}
      <Input/>
      <Select/>
      <input/> */}

      <h1>TODO LIST</h1>
      <Input />
      <List countc={count} str={str} arr={arr} number={number}/>
    </>


  );
}

export default App;
