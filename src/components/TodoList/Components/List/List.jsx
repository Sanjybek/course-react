import React from 'react';
import { useSelector } from 'react-redux'
const List = React.memo(({delet, startEditing}) => {

    const arr = useSelector((state) => state.todoList)
    return (
        <ul>
            {arr.map((arr) => {
                const {id,title,desc, } = arr
                return (
                    <li key={id}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <button onClick={() => delet(id)}>delet</button>
                        <button onClick={() => startEditing(arr)}>Редактировать</button>
                    </li>
                )
            })}
        </ul>
    )
})
export default List

