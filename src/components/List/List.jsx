import styles from './List.module.css'
function List ({
    count, 
    str, 
    arr, 
    ...props
    }) {
    // console.log(props.count);
    // console.log(props);
    const {list} = styles
    return <ul className={list}>
        {/* <li>{props.count}</li>
        <li>{props.str}</li>
        <li>item 3</li> */}
        {arr.map(i => {
            return <li>
                <p>{i}</p>
                <div>{count}</div>
            </li>
        })}

    </ul>
}
export default List