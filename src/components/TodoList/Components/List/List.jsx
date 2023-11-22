import React from 'react';
import { useSelector } from 'react-redux'

const List = React.memo(({arr, delet, startEditing}) => {

    // console.log('List');
    // const call = (state) => state
    const store = useSelector((state) => state.todoList)
    console.log(store, 'store');
    return (
        <ul>
            {arr.map((arr) => {
                const {id,title,desc, } = arr
                return (
                    <li key={id}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <button onClick={() => delet(id)}>delet</button>
                        <button onClick={() => startEditing(id)}>Редактировать</button>
                    </li>
                )
            })}
        </ul>
    )
})
export default List

