import { useDispatch } from 'react-redux'
import { addTodo, editTodo } from '../../../../store/actions';
function AddTodo ({title,desc,setTitle, setDesc,setItem, item, setArr}) {
    console.log(title);
    const dispatch = useDispatch()
    const addTitle = () => {
        if(title.trim() !== '' && desc.trim() !== '') {
          
          if (item) {
            dispatch(editTodo({title, desc, id: item.id}))
            
            setItem(null);
            setTitle('');
            setDesc('');
        } else {
            dispatch(addTodo({title, desc, id: Math.random()}))
            setTitle('');
            setDesc('');
        }  
        }  
    }
   return (
        <>
            <label>
                <span>заголовок</span>
                <input value={title} onChange={(e) => setTitle(e.target.value )} type="text" />
            </label>
            <label>
                <span>Описание</span>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" />
            </label>
            <button onClick={addTitle}>click</button>
        </>
   )
}
export default AddTodo