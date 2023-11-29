import React from 'react';
import { useSelector } from 'react-redux'
import s from './List.module.css'
const List = React.memo(({delet, startEditing}) => {

    const arr = useSelector((state) => state.todoList)
    return (
        <ul className={s.ul_block}>
            {arr.map((arr) => {
                const {id,title,desc, } = arr
                return (
                    <li className={s.li} key={id}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <div className={s.block_btn}>
                            <button onClick={() => delet(id)}>delet</button>
                            <button onClick={() => startEditing(arr)}>Редактировать</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
})
export default List

