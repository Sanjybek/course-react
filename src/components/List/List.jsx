function List ({count, str, arr, ...props}) {
    // console.log(props);
    return <ul>
        {/* <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li> */}
        {arr.map(i => {
            return <li>
                <p>{i}</p>
                <div>{str}</div>
            </li>
        })}
    </ul>
}
export default List