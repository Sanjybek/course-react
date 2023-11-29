import { useState } from 'react'
import styles from './List.module.css'
function List ({count, str, arr, ...props}) {
    // console.log(props.count);
    // console.log(props);

    const [color, setColor] = useState('gray')

    const {list} = styles

    const divStyle = {
        backgroundColor: color,
        fontSize: '28px'
    }
    const handleColor = () => {
        setColor((prevState) => {
            if(prevState === 'gray') {
               return 'red'
            } else {
                return 'gray'
            }
        })
    }
    
    
    return <ul className={list}>
        {/* <li>{props.count}</li>
        <li>{props.str}</li>
        <li>item 3</li> */}
        
        {arr.map(i => {
            return <li>
                <p>{i}</p>
                <div style={divStyle}>{count}</div>
                <button onClick={handleColor}>click</button>
            </li>
        })}

    </ul>
}
export default List